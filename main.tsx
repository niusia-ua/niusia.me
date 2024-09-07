/** @jsx h */
import blog, { h } from "blog";

blog({
  title: "Niusia's Website",
  description: "Rust Software Developer from Ukraine 🇺🇦",
  author: "Nazar Antoniuk",
  avatar: "./avatar.jpg",
  lang: "en",
  dateFormat: (date: Date) => Intl.DateTimeFormat("uk-UA").format(date),
  links: [
    { title: "Email", url: "mailto:nazarantoniuk18@gmail.com", target: "_blank" },
    { title: "GitHub", url: "https://github.com/niusia-ua", target: "_blank" },
    { title: "LinkedIn", url: "https://linkedin.com/in/nazar-antoniuk", target: "_blank" },
    {
      title: "Telegram",
      url: "https://t.me/niusia_ua",
      target: "_blank",
      icon: (
        <svg
          className="inline-block w-5 h-5"
          viewBox="0 0 1.6 1.3083084"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m 0.63781137,0.84842001 -0.02496,0.33980699 a 0.08765735,0.08480449 0 0 0 0.0696999,-0.03269 L 0.849952,1.000651 1.1975383,1.246525 c 0.06331,0.03445 0.1080498,0.01649 0.1253988,-0.05654 L 1.5509067,0.15584098 v 0 c 0.02009,-0.09099 -0.03287,-0.12750101 -0.09618,-0.10453301 L 0.1155173,0.547473 c -0.09252984,0.03533 -0.09039984,0.0848 -0.01551998,0.10747801 l 0.3427154,0.103061 0.77095858,-0.43550702 c 0.03744,-0.02444 0.07183,-0.01089 0.04383,0.01296 z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ],
});
