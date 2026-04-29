// app/page.js

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // simulate delay
  return "Data loaded";
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}

