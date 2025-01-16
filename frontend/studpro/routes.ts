const Routes = {
    LOGIN: 'http://backend:3001/authentication/login',
    REGISTER: 'http://backend:3001/authentication/register',
    AUTHORED_PROBLEMS: 'http://backend:3001/dashboard/authoredProblems',
    PROBLEM_LEVEL_DASHBOARD_CHARTS: 'http://backend:3001/dashboard/getProblemLevelDashboardCharts',
    MONTHLY_SOLVED_PROBLEMS: 'http://backend:3001/dashboard/getMonthlySolvedProblems',
    FLOW_CHART: 'http://backend:3001/flowchart/convertToflowchart',
    PROBLEM_DATA: 'http://backend:3001/extractProblem/problemData',
    CHANGE_PROGRAM: 'http://backend:3001/problemCompile/changeProgram',
    COMPILE_AND_RUN: 'http://backend:3001/problemCompile/compileandrun',
    SUBMIT: 'http://backend:3001/problemCompile/submit',
    UPLOAD_FILE: 'http://backend:3001/problemCreation/uploadFile',
    CREATE_PROBLEM: 'http://backend:3001/problemCreation/createProblem',
    GET_USER: 'http://backend:3001/users/getUser',
    UPDATE_USER: 'http://backend:3001/users/updateUser',
    LEADERBOARD: 'http://backend:3001/leaderboard/getLeaderboard',
};
export default Routes;