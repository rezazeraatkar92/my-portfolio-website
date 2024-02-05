import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { themeMode } = await request.json();
  try {
    const result =
      await sql`UPDATE settings SET setting_value = ${themeMode} WHERE setting_name = 'theme';`;

    revalidatePath("/", "layout");

    return NextResponse.json({ message: "OK", result }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Error",
        error: `something went wrong on updating thememode to ${themeMode}`,
      },
      { status: 500 }
    );
  }
}
