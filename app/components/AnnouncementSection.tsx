import EmailSignupForm from "./EmailSignupForm";

export default function AnnouncementSection() {
  return (
    <section className="bg-black py-16 md:py-20 px-4 md:px-10 border-t border-white/10">
      <div className="max-w-[900px] mx-auto text-center">
        <h2 className="text-2xl md:text-[32px] font-bold mb-4 leading-tight">
          2027 lineup and partners announced soon
        </h2>
        <p className="text-[15px] text-gray-300 leading-relaxed mb-8">
          Enter your email to get updates on Babcock Tech Week 2027.
        </p>
        <EmailSignupForm />
      </div>
    </section>
  );
}
