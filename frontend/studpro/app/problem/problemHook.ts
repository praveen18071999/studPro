/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Language, TestCase, QuestionLanguage } from "./problemTypes";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import Routes from "../../routes";

export const languages: Language[] = [
  { name: "JavaScript", value: "javascript", extension: javascript },
  { name: "Python", value: "python", extension: python },
  { name: "Java", value: "java", extension: java },
  { name: "C++", value: "cpp", extension: cpp },
];

export const questionLanguages: QuestionLanguage[] = [
  { name: "English", value: "english" }
];

const temp = {
  english: {
    title: "",
    description:
      "",
    
    examples: [
      { input: "", output:""},
      { input: "", output: ""},
    ],
    marks: "",
    recievedMarks: "",
  }
};

export function useCodeCompiler(page: any) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages[0]
  );
  const [questionData, setQuestionData] = useState(temp);

  const [selectedQuestionLanguage, setSelectedQuestionLanguage] =
    useState<QuestionLanguage>(questionLanguages[0]);
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [actualmarks, setActualMarks] = useState("");
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [baseTestCaseInput, setBaseTestCaseInput] = useState([""]);
  const [baseTestCaseOutput, setBaseTestCaseOutput] = useState([""]);
  const [testCaseInput, setTestCaseInput] = useState([""]);
  const [testCaseOutput, setTestCaseOutput] = useState([""]);
  const [actualTestCaseInputs, setActualTestCaseInputs] = useState([""]);
  const [actualTestCaseOutputs, setActualTestCaseOutputs] = useState([""]);
  const [totalTestCasesInput, setTotalTestCasesInput] = useState([""]);
  const [totalTestCasesOutput, setTotalTestCasesOutput] = useState([""]);
    useEffect(() => {
    fetch(`${Routes.PROBLEM_DATA}/${page}`, {
      method: "GET",
      headers: { "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      },
      
    })
      .then((response) =>
        response.json().then((data) => {
          if(data.message == 'Unauthorized' && data.statusCode == 401){
            localStorage.removeItem('access_token');
            window.location.href = '/authentication';
        }
          data = data.data[0];
          //console.log(data);
          
          const questionData = {
            english: {
              title: data["problemtitle"],
              description: data["problemdescription"],
              marks: data["actualmarks"],
              recievedMarks:data["receivedmarks"],
              examples: [
                {
                  input: data["basetestcasesinput"][0],
                  output: data["basetestcasesoutput"][0],
                },
                {
                  input: data["basetestcasesinput"][1],
                  output: data["basetestcasesoutput"][1],
                },
                {
                  input: data["basetestcasesinput"][2],
                  output: data["basetestcasesoutput"][2],
                },
              ],
            }
          };
          //.log(data["baseTestCasesOutput"]);
          setQuestionData(questionData);
          setBaseTestCaseInput(data["basetestcasesinput"]);
          setBaseTestCaseOutput(data["basetestcasesoutput"]);
          setActualTestCaseInputs(data["actualinput"]);
          setActualTestCaseOutputs(data["actualoutput"]);
          setCode(data["problemcode"])
          setActualMarks(data["actualmarks"]);
          const totalTestCases = data["actualinput"].length;
          const testCases: TestCase[] = [
            { id: 0, status: "pending" },
            { id: 1, status: "pending" },
            { id: 2, status: "pending" },
          ];
  
          for(let i = 0; i < totalTestCases; i++) {
            testCases.push({id:i+3, status: "pending"});
          }
        
          setTestCases(testCases);
        })
      )
      .catch((error) => console.error("Error:", error));
  }, []);
  useEffect(() => {
    setTestCaseInput([input]);
    setTestCaseOutput([""]);
  }, [input]);
  useEffect(() => {
    if (code) {
      const data = {
        language: selectedLanguage.value,
        code: code,
        input: "",
        output: "",
      };
      fetch(Routes.CHANGE_PROGRAM, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify(data),
      })
        .then((response) =>
          response.json().then((data) => {
            if(data.message == 'Unauthorized' && data.statusCode == 401){
              localStorage.removeItem('access_token');
              window.location.href = '/authentication';
          }
            setCode(data["actualOutput"]);
          })
        )
        .catch((error) => console.error("Error:", error));
    }
  }, [selectedLanguage]);
  const handleLanguageChange = (value: string) => {
    console.log("Changing language to", value);
    const language = languages.find((lang) => lang.value === value);

    if (language) {
      setSelectedLanguage(language);
    }
  };

  const handleQuestionLanguageChange = (value: string) => {
    const language = questionLanguages.find((lang) => lang.value === value);
    if (language) {
      setSelectedQuestionLanguage(language);
    }
  };

  const handleRunCode = () => {
    //console.log("Running code...");
    if (!code) {
      setOutput("Please enter some code to run.");
      return;
    }
    const data = {
      language: selectedLanguage.value,
      code: code,
      input: input ? testCaseInput : baseTestCaseInput,
      expectedOutput: input ? testCaseOutput : baseTestCaseOutput,
    };
    fetch(Routes.COMPILE_AND_RUN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) =>
        response.json().then((data) => {
          if(data.message == 'Unauthorized' && data.statusCode == 401){
            localStorage.removeItem('access_token');
            window.location.href = '/authentication';
        }
          console.log(data);
          if (input || data) setOutput(data[0].actualOutput);
          else if (data[0].error) setOutput(data[0].error);
          else {
            setTestCases(
              testCases.map((testCase, index) => {
                if(index>2)
                  return { ...testCase, status: "pending" };
                const normalizedActualOutput = data[index].actualOutput.trim().replace(/\s+/g, ' ');
                const normalizedExpectedOutput = baseTestCaseOutput[index].trim().replace(/\s+/g, ' ');
                if (normalizedActualOutput === normalizedExpectedOutput) {
                  return { ...testCase, status: "passed" };
                } else {
                  return { ...testCase, status: "failed" };
                }
              })
            );
            setOutput("");
          }
        })
      )
      .catch((err) => console.log(err));
  };

  const handleSubmit = () => {
    if (!code) {
      setOutput("Please enter some code to run.");
      return;
    }
    setTotalTestCasesInput([...baseTestCaseInput, ...actualTestCaseInputs]);
    setTotalTestCasesOutput([...baseTestCaseOutput, ...actualTestCaseOutputs]);
   // console.log(totalTestCasesInput);
    //console.log(totalTestCasesOutput);
    const data = {
      language: selectedLanguage.value,
      problem: 4,
      userid:18,
      code: code,
      marks: actualmarks,
      input: input ? testCaseInput : totalTestCasesInput,
      expectedOutput: input ? testCaseOutput : totalTestCasesOutput,
    };
    fetch(Routes.SUBMIT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) =>
        response.json().then((data) => {
          if(data.message == 'Unauthorized' && data.statusCode == 401){
            localStorage.removeItem('access_token');
            window.location.href = '/authentication';
        }
          //console.log(data);
          if (input) setOutput(data[0].actualOutput);
          else if (data[0].error) setOutput(data[0].error);
          else {
            setTestCases(
              testCases.map((testCase, index) => {
                const normalizedActualOutput = data[index].actualOutput.trim().replace(/\s+/g, ' ');
                const normalizedExpectedOutput = totalTestCasesOutput[index].trim().replace(/\s+/g, ' ');
                if (normalizedActualOutput === normalizedExpectedOutput) {
                  return { ...testCase, status: "passed" };
                } else {
                  return { ...testCase, status: "failed" };
                }
              })
            );
            setOutput("");
          }
        })
      )
      .catch((err) => console.log(err));
    
  };

  return {
    selectedLanguage,
    selectedQuestionLanguage,
    languages,
    questionLanguages,
    questionData,
    setQuestionData,
    code,
    input,
    output,
    testCases,
    handleLanguageChange,
    handleQuestionLanguageChange,
    handleRunCode,
    handleSubmit,
    setCode,
    setInput,
  };
}
