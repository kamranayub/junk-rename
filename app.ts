function app(): string {
  const hello: string = "world";

  return `
    <html>
      <head>
        <title>Hello World</title>
      </head>
      <body>${hello}</body>
    </html>
  `
}

export default app;