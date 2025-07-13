import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [operation, setOperation] = useState("factorial");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const factorial = (num) => {
    if (num < 0) throw new Error("Negative numbers not allowed");
    if (num === 0 || num === 1) return 1;
    let res = 1;
    for (let i = 2; i <= num; i++) {
      res *= i;
    }
    return res;
  };

  const handleCalculate = () => {
    setError("");
    setResult(null);

    const n = Number(number);
    if (isNaN(n) || number === "") {
      setError("Please enter a valid number.");
      return;
    }

    try {
      if (operation === "factorial") {
        const res = factorial(n);
        setResult(res);
      } else if (operation === "prime") {
        const res = isPrime(n);
        setResult(res ? "Yes, it's a Prime Number" : "No, it's not a Prime Number");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Math Calculator</h2>

      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={styles.input}
      />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        style={styles.select}
      >
        <option value="factorial">Factorial</option>
        <option value="prime">Prime Check</option>
      </select>

      <button onClick={handleCalculate} style={styles.button}>
        Calculate
      </button>

      {result !== null && (
        <p style={styles.result}>
          ✅ Result: <strong>{result}</strong>
        </p>
      )}

      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 500,
    margin: "60px auto",
    padding: 20,
    border: "1px solid #ccc",
    borderRadius: 10,
    textAlign: "center",
    fontFamily: "Arial",
    backgroundColor: "#f7f7f7",
  },
  input: {
    padding: "10px",
    marginBottom: "10px",
    width: "80%",
    fontSize: "16px",
  },
  select: {
    padding: "10px",
    fontSize: "16px",
    marginBottom: "10px",
    width: "85%",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#2d98da",
    color: "#fff",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
  },
  result: {
    marginTop: 20,
    fontSize: "18px",
    color: "green",
  },
  error: {
    marginTop: 10,
    color: "red",
  },
};

export default App;
