import { useEffect, useState } from "react";
import AnimatedElement from "./animations/AnimatedElement";
import AnimatedHeading from "./animations/AnimatedHeading";
import { experiences } from "./personal/data";
export default function Experience() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setPrefersReducedMotion(mq.matches);
    handler();
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  const animate = !prefersReducedMotion;

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedHeading level={2} className="text-center mb-12">
          Professional Experience
        </AnimatedHeading>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const delay = animate ? index * 100 : 0;
            const content = (
              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-500">
                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-blue-500 -translate-x-[6px]" />
                <div className="bg-white dark:bg-gray-700 rounded-lg border border-transparent">
                  <div className="p-6 shadow-sm hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-150 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.period}
                      </p>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-gray-600 dark:text-gray-300 flex items-start"
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );

            return animate ? (
              <AnimatedElement
                key={index}
                as="div"
                animation="fade-up"
                delay={delay}
              >
                {content}
              </AnimatedElement>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
