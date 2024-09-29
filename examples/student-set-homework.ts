import { setHomeworkState, studentAttendance } from "../src";

import { ExampleCredentialsError, credentials } from "./_credentials";
import { loginUsingCredentials } from "./_login-using-crendentials";

void async function main () {
  if (!credentials.student_username || !credentials.student_password)
    throw new ExampleCredentialsError("student");

  const { session, account } = await loginUsingCredentials(credentials.student_username, credentials.student_password);
  const attendance = await setHomeworkState(session, account, 1651, true);
  console.log(attendance);
}();
