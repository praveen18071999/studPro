// filepath: /Users/praveenkumargangapuram/Desktop/Projects/studPro/frontend/src/routes.ts
const backendUrl = process.env.REACT_APP_BACKEND_URL;

if (!backendUrl) {
    console.error('REACT_APP_BACKEND_URL is not defined');
}
const Routes = {
    LOGIN: `${backendUrl}/authentication/login`,
    REGISTER: `${backendUrl}/authentication/register`,
    AUTHORED_PROBLEMS: `${backendUrl}/dashboard/authoredProblems`,
    PROBLEM_LEVEL_DASHBOARD_CHARTS: `${backendUrl}/dashboard/getProblemLevelDashboardCharts`,
    MONTHLY_SOLVED_PROBLEMS: `${backendUrl}/dashboard/getMonthlySolvedProblems`,
    FLOW_CHART: `${backendUrl}/flowchart/convertToflowchart`,
    PROBLEM_DATA: `${backendUrl}/extractProblem/problemData`,
    CHANGE_PROGRAM: `${backendUrl}/problemCompile/changeProgram`,
    COMPILE_AND_RUN: `${backendUrl}/problemCompile/compileandrun`,
    SUBMIT: `${backendUrl}/problemCompile/submit`,
    UPLOAD_FILE: `${backendUrl}/problemCreation/uploadFile`,
    CREATE_PROBLEM: `${backendUrl}/problemCreation/createProblem`,
    GET_USER: `${backendUrl}/users/getUser`,
    UPDATE_USER: `${backendUrl}/users/updateUser`,
    LEADERBOARD: `${backendUrl}/leaderboard/getLeaderboard`,
};

export default Routes;