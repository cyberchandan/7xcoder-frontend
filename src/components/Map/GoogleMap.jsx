export default function GoogleMap() {
  return (
    <div className="w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden ring-1 ring-slate-700">
      <iframe
        title="7xcoder location"
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2676.9944488390383!2d77.39936694502835!3d28.616599867710544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef0036304289%3A0xec14bc66f4be0372!2s7xcoder.com!5e1!3m2!1sen!2sin!4v1770559864249!5m2!1sen!2sin"

        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
