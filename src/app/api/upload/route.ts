import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

interface Task {
  id: string;
  title: string;
  fileName: string;
  skills: string[];
}

interface TasksData {
  tasks: Task[];
}

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file = data.get("file") as File;
  const title = data.get("title") as string;
  const skills = data.getAll("skills") as string[];

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const buffer = await file.arrayBuffer();
  const saveData = path.join(process.cwd(), "data", "tasks.json");
  const existingData = await fs.promises.readFile(saveData, "utf-8");
  const parsedData: TasksData = JSON.parse(existingData || '{"tasks": []}');

  const newTask: Task = {
    id: `${Date.now()}`,
    title,
    fileName: file.name,
    skills,
  };
  const updatedTasks = [...parsedData.tasks, newTask];
  const updatedData: TasksData = { tasks: updatedTasks };
  await fs.promises.writeFile(saveData, JSON.stringify(updatedData, null, 2));

  const filePath = path.join(process.cwd(), "public", file.name);
  await writeFile(filePath, Buffer.from(buffer));
  console.log(`open ${filePath} to see the uploaded file`);

  return NextResponse.json({ success: true });
}
