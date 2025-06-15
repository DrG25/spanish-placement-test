import { useState } from "react";

const questions = [
  {
    text: "¿Qué frase está en pretérito?",
    options: ["Ana estudia cada día.", "Juan comía arroz.", "María fue al mercado ayer.", "Siempre llego temprano."]
  },
  {
    text: "Completa: Ayer ___ mucho frío en Madrid.",
    options: ["hay", "había", "hubo", "hacía"]
  },
  {
    text: "¿Cuál palabra completa mejor la frase? —¿___ fuiste anoche?",
    options: ["Qué", "Dónde", "Cuál", "Cuándo"]
  },
  {
    text: "Escoge la opción correcta: Me gusta que tú ___ con nosotros.",
    options: ["comes", "comer", "comiste", "comas"]
  },
  {
    text: "¿Qué palabra no pertenece al grupo?",
    options: ["cuchara", "tenedor", "silla", "cuchillo"]
  }
];

export default function SpanishPlacementTest() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [writing, setWriting] = useState("");
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  return (
    <form
      name="placement"
      method="POST"
      data-netlify="true"
      className="space-y-4 bg-white p-4 rounded shadow max-w-2xl mx-auto"
    >
      <input type="hidden" name="form-name" value="placement" />
      <h1 className="text-2xl font-bold">W&G Spanish Placement Test</h1>
      <p>Bienvenido/a – Welcome!</p>
      <input name="Name" required placeholder="Nombre / Name" value={name} onChange={e => setName(e.target.value)} />
      <input name="Email" required placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      {questions.map((q, i) => (
        <div key={i}>
          <p>{i + 1}. {q.text}</p>
          {q.options.map((opt, j) => (
            <label key={j}>
              <input
                type="radio"
                name={`Q${i + 1}`}
                value={opt}
                onChange={() => {
                  const newAnswers = [...answers];
                  newAnswers[i] = opt;
                  setAnswers(newAnswers);
                }}
                required
              /> {opt}
            </label>
          ))}
        </div>
      ))}
      <textarea
        name="Writing"
        rows="5"
        placeholder="Preséntate / Introduce yourself"
        value={writing}
        onChange={e => setWriting(e.target.value)}
      />
      <button type="submit">Enviar / Submit</button>
    </form>
  );
}
