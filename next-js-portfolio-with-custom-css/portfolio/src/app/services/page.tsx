import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <div className="section-services">
        <h2>My Sesrvices</h2>
        <p className="services-para">
          I am front-end Developer but in future I will able to give as a full
          stack Developer and as well as AI Agent Developer.
        </p>
        <div className="services-grid">
          <div className="grid-items item-1">
            <div className="skill-div">
              <Image
                src="/image/web dev pic.png"
                width={60}
                height={48}
                alt="it is a skill pic"
              />
            </div>
            <strong>Web-Development</strong>
            <br />
            <p>
              I am a passionate Web-Developer.You can hire me as a front-end
              webdeveloper.If you want to unique, fully responvise and
              userfrinedly website so contact me.
            </p>
            <button>
              <Link href="/contact" target="_blank">
                Buy Services
              </Link>
            </button>
          </div>

          <div className="grid-items item-2">
            <div className="skill-div">
              <Image
                src="/image/ui ux.png"
                width={60}
                height={48}
                alt="it is a skill pic"
              />
            </div>
            <strong>UI UX Designer</strong>
            <br />
            <p>
              I am a passionate UI UX Designer.You can hire me as a UI UX
              Designer.If you want to unique, fully actractivness and
              userfrinedly website so contact me.
            </p>
            <button>
              <Link href="/contact" target="_blank">
                Buy Services
              </Link>
            </button>
          </div>

          <div className="grid-items item-3">
            <div className="skill-div">
              <img
                src="https://img.freepik.com/free-photo/close-up-woman-eye-looking-camera-blue-iris-generated-by-artificial-intelligence_188544-240714.jpg"
                alt="it is a skill pic"
              />
            </div>
            <strong>Video Editor</strong>
            <br />
            <p>
              I am a passionate video Editor.You can hire me as a video
              editor.If you want to unique, fully interested and userfrinedly
              videos so contact me.
            </p>
            <button>
              <Link href="/contact" target="_blank">
                Buy Services
              </Link>
            </button>
          </div>

          <div className="grid-items item-4">
            <div className="skill-div">
              <img
                src="https://img.freepik.com/free-photo/close-up-woman-eye-looking-camera-blue-iris-generated-by-artificial-intelligence_188544-240714.jpg"
                alt="it is a skill pic"
              />
            </div>
            <strong>Graphic Designer</strong>
            <br />
            <p>
              I am a passionate Graphic Designer.You can hire me as a Graphic
              Designer.If you want to unique, fully actractiv and userfrinedly
              Graphics so contact me.
            </p>
            <button>
              <Link href="/contact" target="_blank">
                Buy Services
              </Link>
            </button>
          </div>

          <div className="grid-items item-5">
            <div className="skill-div">
              <img
                src="https://img.freepik.com/free-photo/close-up-woman-eye-looking-camera-blue-iris-generated-by-artificial-intelligence_188544-240714.jpg"
                alt="it is a skill pic"
              />
            </div>
            <strong>Styling Tools</strong>
            <br />
            <p>
              I am a passionate Web-Developer and UI UX Designer.If you want to
              unique, userfrinedly website so contact me.My tools for styling
              are CSS, Tailwind CSS, Figma.
            </p>
            <button>
              <Link href="/contact" target="_blank">
                Buy Services
              </Link>
            </button>
          </div>

          <div className="grid-items item-6">
            <div className="skill-div">
              <img
                src="https://img.freepik.com/free-photo/close-up-woman-eye-looking-camera-blue-iris-generated-by-artificial-intelligence_188544-240714.jpg"
                alt="it is a skill pic"
              />
            </div>
            <strong>Development Tools</strong>
            <br />
            <p>
              I am a passionate Web-Developer.You can hire me as a front-end
              webdeveloper.If you want to unique, fully responvise and
              userfrinedly website so contact me.
            </p>
            <button>
              <Link href="/contact" target="_blank">
                Buy Services
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
