import { inheritCV } from "./tools/tools.js";
import { cv_en, cv_fs_es } from "./cv.js";
const cv_fs_arg = inheritCV(cv_fs_es);
cv_fs_arg.experience[1].description += 'test';
const cv_fs_arg_en = inheritCV(cv_en);
cv_fs_arg_en.experience[0].description += "Achievements:<br>" +
    "Helped clients to succesfully implement their projects of HR systems, as well as supported them \
	to keep their systems running, adapting and connecting to their environments and infrastructure.";
cv_fs_arg_en.experience[1].description += "Achievements:<br>" +
    "Helped finalize a complex project that had many implemetation and logistic problems by the time I joined it.";
export { cv_fs_arg, cv_fs_arg_en };
