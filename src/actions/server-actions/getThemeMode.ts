import { sql } from "@vercel/postgres";

export async function getThemeMode(): Promise<ThemeMode> {
  try {
    const { rows } =
      await sql`SELECT setting_value FROM settings WHERE setting_name = 'theme';`;

    console.log("SELECT", rows[0].setting_value);

    return rows[0].setting_value;
  } catch (error) {
    console.error(error);
    return "system";
  }
}
