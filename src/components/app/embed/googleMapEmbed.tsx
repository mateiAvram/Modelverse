export function GoogleMapEmbed() {
  return (
    <div className="relative h-[250px] w-full overflow-hidden rounded-2xl shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.123519580124!2d4.338772911754409!3d52.07903226866742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b7f9a1249af7%3A0xfdde7b7393d18ba1!2sModelverse%20BV!5e1!3m2!1sen!2snl!4v1747067754572!5m2!1sen!2snl"
        className="h-full w-full border-0"
        loading="lazy"
      ></iframe>
    </div>
  );
}
