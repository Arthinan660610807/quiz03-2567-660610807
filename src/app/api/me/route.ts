import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Arthinan Changsawang",
    studentId: "660610807",
  });
};
