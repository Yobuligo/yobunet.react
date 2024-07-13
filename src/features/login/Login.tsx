import { useState } from "react";
import styles from "./Login.module.scss";

export const Login: React.FC = () => {
  const [error, setError] = useState("");

  const onClick = () => setError("Invalid username or password");

  return (
    <div className={styles.login}>
      <div>
        <label htmlFor="">Username</label>
      </div>
      <div>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Password</label>
      </div>
      <div>
        <input type="password" />
      </div>
      <div>
        <button onClick={onClick}>Login</button>
      </div>
      <div className={styles.error}>{error}</div>
    </div>
  );
};
