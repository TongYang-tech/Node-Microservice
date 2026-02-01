import fs from "fs";
import path from "path";

const SECRET_MOUNT_PATH = "/etc/secrets/myscret";

export function getSecret(secretName: string): string | null {
  try {
    const filePath = path.join(SECRET_MOUNT_PATH, secretName);
    const secretValue = fs.readFileSync(filePath, "utf8");
    return secretValue;
  } catch (error) {
    console.log("Error retrieving secret value: ", error);
    return null;
  }
}
