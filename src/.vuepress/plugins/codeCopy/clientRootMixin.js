import Vue from 'vue';
import CodeCopy from './CodeCopy.vue';
import './style.css';

export default {
	updated() {
		document.querySelectorAll('div[class*="language-"]')
		.forEach(codeBlock => {
			if (codeBlock.classList.contains('xiaopanda-code-copy')) {
				return;
			}

			const CodeCopyClass = Vue.extend(CodeCopy);
			const instance = new CodeCopyClass();
			instance.$mount();
			const codePopyElement = instance.$el;
			codeBlock.prepend(codePopyElement);
			codeBlock.classList.add('xiaopanda-code-copy');

			codePopyElement.addEventListener('click', () => {
				const code = codeBlock.querySelector('code');
				if (navigator.clipboard) {
					navigator.clipboard.writeText(code.innerText).then(() => {
					});
				} else {
					const copyElement = document.createElement('textarea');
	                document.body.appendChild(copyElement);
	                copyElement.value = code.innerText;
	                copyElement.select();
	                document.execCommand('copy');
	                copyElement.remove();
				}
				
				let t = codeBlock.style.transition;
				let b = codeBlock.style.background;
				codeBlock.style.transition = 'background 200ms';
				codeBlock.style.background = '#2c3e50';

				setTimeout(() => {
					codeBlock.style.transition = t;
					codeBlock.style.background = b;
				}, 200);

			});
		});
	}
}