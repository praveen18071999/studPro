const Routes={
    LOGIN:'http://localhost:3001/authentication/login',
    REGISTER:'http://localhost:3001/authentication/register',
    AUTHORED_PROBLEMS:'http://localhost:3001/dashboard/authoredProblems',
    PROBLEM_LEVEL_DASHBOARD_CHARTS:'http://localhost:3001/dashboard/getProblemLevelDashboardCharts',
    MONTHLY_SOLVED_PROBLEMS:'http://localhost:3001/dashboard/getMonthlySolvedProblems',
    FLOW_CHART:'http://localhost:3001/flowchart/convertToflowchart',
    PROBLEM_DATA:'http://localhost:3001/extractProblem/problemData',
    CHANGE_PROGRAM:'http://localhost:3001/problemCompile/changeProgram',
    COMPILE_AND_RUN:'http://localhost:3001/problemCompile/compileandrun',
    SUBMIT:'http://localhost:3001/problemCompile/submit',
    UPLOAD_FILE:'http://localhost:3001/problemCreation/uploadFile',
    CREATE_PROBLEM:'http://localhost:3001/problemCreation/createProblem',
    GET_USER:'http://localhost:3001/users/getUser',
    UPDATE_USER:'http://localhost:3001/users/updateUser',
    LEADERBOARD:'http://localhost:3001/leaderboard/getLeaderboard',
}
export default Routes;