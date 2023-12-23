import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  // const id = searchParams.get("id");

  const params = Object.fromEntries(searchParams.entries());

  try {
    // const result = await fetchData(id);
    return NextResponse.json(params);
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
