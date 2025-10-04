import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  if (!json || !json.name || !json.email || !json.message) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  // In a real app, send email or store in DB here.
  // For now, just echo back success.
  await new Promise((r) => setTimeout(r, 400));

  return NextResponse.json({ ok: true });
}
