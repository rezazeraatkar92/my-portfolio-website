import { sql } from "@vercel/postgres";

export async function getThemeMode(): Promise<ThemeMode> {
  try {
    const { rows } =
      await sql`SELECT setting_value FROM settings WHERE setting_name = 'theme';`;

    return rows[0].setting_value;
  } catch (error) {
    console.error(error);
    return "system";
  }
}
