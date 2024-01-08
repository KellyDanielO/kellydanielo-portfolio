import { motion } from "framer-motion";
const SkillsSection = () => {
  return (
    <motion.section
      id="skills"
      className="w-full py-20 flex justify-center items-center flex-col"
      transition={{ delay: 0.5 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <h1 className="text-5xl font-lemon text-primary">Skills</h1>
      <div className="flex py-24 justify-center items-center w-full gap-20 flex-col">
        <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 gap-x-48 gap-y-10">
          {/* Each column */}
          {/* {skillsList.map((skill) => {
            let skillClass: string = `h-2 w-[${skill.level}] bg-primary`;
            return (
              <div>
                <div className="flex justify-between items-center">
                  <p>{skill.skill}</p>
                  <strong>{skill.level}</strong>
                </div>
                <div className="h-2 w-64 bg-softColor/55">
                  <div className={skillClass}></div>
                </div>
              </div>
            )
          })} */}
          {/* HTML */}
          <div>
            <div className="flex justify-between items-center">
              <p>HTML</p>
              <strong>80%</strong>
            </div>
            <div className="h-2 w-64 bg-softColor/55">
              <div className="h-2 w-[80%] bg-primary"></div>
            </div>
          </div>
          {/* End HTML */}
          {/* CSS */}
          <div>
            <div className="flex justify-between items-center">
              <p>CSS</p>
              <strong>85%</strong>
            </div>
            <div className="h-2 w-64 bg-softColor/55">
              <div className="h-2 w-[85%] bg-primary"></div>
            </div>
          </div>
          {/* End CSS */}
          {/* JQuery */}
          <div>
            <div className="flex justify-between items-center">
              <p>JQuery</p>
              <strong>70%</strong>
            </div>
            <div className="h-2 w-64 bg-softColor/55">
              <div className="h-2 w-[70%] bg-primary"></div>
            </div>
          </div>
          {/* End JQuery */}
          {/* JavaScript */}
          <div>
            <div className="flex justify-between items-center">
              <p>JavaScript</p>
              <strong>65%</strong>
            </div>
            <div className="h-2 w-64 bg-softColor/55">
              <div className="h-2 w-[65%] bg-primary"></div>
            </div>
          </div>
          {/* End JavaScript */}
          {/* TailwindCSS */}
          <div>
            <div className="flex justify-between items-center">
              <p>TailwindCSS</p>
              <strong>75%</strong>
            </div>
            <div className="h-2 w-64 bg-softColor/55">
              <div className="h-2 w-[75%] bg-primary"></div>
            </div>
          </div>
          {/* End TailwindCSS */}
          {/* PHP */}
          <div>
            <div className="flex justify-between items-center">
              <p>PHP</p>
              <strong>70%</strong>
            </div>
            <div className="h-2 w-64 bg-softColor/55">
              <div className="h-2 w-[70%] bg-primary"></div>
            </div>
          </div>
          {/* End PHP */}
          {/* React */}
          <div>
            <div className="flex justify-between items-center">
              <p>React</p>
              <strong>65%</strong>
            </div>
            <div className="h-2 w-64 bg-softColor/55">
              <div className="h-2 w-[65%] bg-primary"></div>
            </div>
          </div>
          {/* End React */}
          {/* Flutter */}
          <div>
            <div className="flex justify-between items-center">
              <p>Flutter</p>
              <strong>80%</strong>
            </div>
            <div className="h-2 w-64 bg-softColor/55">
              <div className="h-2 w-[80%] bg-primary"></div>
            </div>
          </div>
          {/* End Flutter */}
          {/* Python */}
          <div>
            <div className="flex justify-between items-center">
              <p>Python</p>
              <strong>70%</strong>
            </div>
            <div className="h-2 w-64 bg-softColor/55">
              <div className="h-2 w-[70%] bg-primary"></div>
            </div>
          </div>
          {/* End Python */}
          {/* Django */}
          <div>
            <div className="flex justify-between items-center">
              <p>Django</p>
              <strong>65%</strong>
            </div>
            <div className="h-2 w-64 bg-softColor/55">
              <div className="h-2 w-[65%] bg-primary"></div>
            </div>
          </div>
          {/* End Django */}
          {/* MySQL */}
          <div>
            <div className="flex justify-between items-center">
              <p>MySQL</p>
              <strong>65%</strong>
            </div>
            <div className="h-2 w-64 bg-softColor/55">
              <div className="h-2 w-[65%] bg-primary"></div>
            </div>
          </div>
          {/* End MySQL */}
          {/* Postgres */}
          <div>
            <div className="flex justify-between items-center">
              <p>Postgres</p>
              <strong>65%</strong>
            </div>
            <div className="h-2 w-64 bg-softColor/55">
              <div className="h-2 w-[65%] bg-primary"></div>
            </div>
          </div>
          {/* End Postgres */}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
