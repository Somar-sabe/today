import Link from "next/link";
export default function ThankYouPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f9fafb",
        direction: "ltr", // ✅ English layout
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 20px 60px rgba(0,0,0,.15)",
          textAlign: "center",
          maxWidth: "500px",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "800",
            marginBottom: "10px",
          }}
        >
           Submission Successful!
        </h1>

        <p
          style={{
            color: "#6b7280",
            marginBottom: "20px",
          }}
        >
          Your request has been submitted successfully.
          Our team will contact you shortly.
        </p>

<Link
  href="/"
  style={{
    display: "inline-block",
    padding: "12px 20px",
    borderRadius: "10px",
    background: "linear-gradient(180deg,#b89264,#d2b48c)",
    color: "#fff",
    fontWeight: "700",
    textDecoration: "none",
  }}
>
  Back to Home
</Link>
      </div>
    </div>
  );
}