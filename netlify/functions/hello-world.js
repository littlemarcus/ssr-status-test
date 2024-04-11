export default async (req, context) => {
    console.log(process.version);
    return new Response("Hello, world!");
  };
  