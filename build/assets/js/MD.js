var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function loadMarkdown() {
    return __awaiter(this, void 0, void 0, function* () {
        let mdTags = Array.from(document.getElementsByTagName("md"));
        for (const [index, elementValue] of mdTags.entries()) {
            let src = elementValue.getAttribute("src");
            if (src) {
                try {
                    let srccontent = yield fetch(src);
                    if (srccontent.status === 404) {
                        console.error(`File not found: ${src} (${index})`);
                        continue;
                    }
                    let content = yield srccontent.text();
                    elementValue.innerHTML = marked.parse(content);
                }
                catch (error) {
                    console.error(`Error fetching ${src}:`, error);
                }
            }
            else {
                console.log("No src at:", index);
            }
        }
    });
}
