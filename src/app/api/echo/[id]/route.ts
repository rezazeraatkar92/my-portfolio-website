import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  const id = params.id;
  try {
    // const result = await fetchData(id);
    return NextResponse.json({ message: "OK", id }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
