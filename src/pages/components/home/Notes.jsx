import styled from "styled-components";
import { motion } from "framer-motion";

export default function Notes(props) {
  const { notes } = props;

  const Wrapper = styled(motion.div)`
    position: relative;
    width: auto;
    height: auto;
  `;

  const Glow = styled(motion.div)`
    background: linear-gradient(90deg, #ffa0ae 0%, #aacaef 75%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-filter: blur(15px);
    filter: blur(15px);
    border-radius: 16px;
  `;

  const Card = styled(motion.div)`
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    background: rgba(255, 255, 255, 0.65);
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.125);
    div {
      color: #4a4a4c;
      height: 50px;
    }
  `;

  const cardVariants = {
    hover: {
      scale: 1.05,
    },
    initial: {
      scale: 1,
    },
  };

  const glowVariants = {
    hover: {
      opacity: 0.8,
    },
    initial: {
      scale: 1.05,
      opacity: 0,
    },
  };

  if (!notes || notes.length === 0) {
    return <p className="mt-5">You haven't created any notes yet.</p>;
  } else {
    return (
      <div className="pt-5">
        <h4 className="">Notes</h4>
        <div className="container my-4">
          <div className="row">
            {notes.map((note, id) => {
              return (
                <div key={id} className="col-12 col-md-4">
                  <Wrapper
                    className="my-2"
                    initial="initial"
                    whileHover="hover"
                  >
                    <Glow
                      variants={glowVariants}
                      transition={{
                        ease: "easeOut",
                        delay: 0.15,
                      }}
                    />
                    <Card
                      key={note.id}
                      className="card p-3"
                      variants={cardVariants}
                      transition={{
                        ease: "easeOut",
                        delay: 0.15,
                        duration: 0.5,
                      }}
                    >
                      <h6 className="">{note.note}</h6>
                    </Card>
                  </Wrapper>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
