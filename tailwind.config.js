/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// Paleta de Cores Cyberpunk Glassmorphism
				primary: "hsl(327, 90%, 54%)", // Rosa Neon Vibrante
				success: "hsl(145, 80%, 45%)", // Verde Elétrico
				warning: "hsl(45, 100%, 50%)", // Amarelo Cibernético
				critical: "hsl(0, 90%, 60%)", // Vermelho Alerta
				base: {
					low: "hsl(240, 20%, 15%)",    // Roxo Metálico Escuro
					lower: "hsl(240, 22%, 11%)",   // Azul Meia-Noite Profundo
					lowest: "hsl(240, 25%, 7%)",   // Quase Preto
				},
				surface: {
					// Cores para o efeito de vidro (glassmorphism)
					overlay: "hsla(250, 30%, 12%, 0.5)",   // Fundo de Terminal Translúcido
					high: "hsla(250, 25%, 25%, 0.4)",  // Roxo de Interface Translúcido
					higher: "hsla(250, 28%, 30%, 0.6)", // Roxo de Interface mais claro/translúcido
					highest: "hsla(250, 30%, 35%, 0.7)",// Roxo de Interface ainda mais claro/translúcido
				},
				border: {
					normal: "hsl(180, 100%, 50%, 0.3)", // Borda Ciano Translúcida
					faint: "hsl(180, 100%, 50%, 0.1)",  // Borda Ciano Suave
					strong: "hsl(180, 100%, 50%, 0.6)", // Borda Ciano Forte
				},
				icon: {
					default: "hsl(210, 100%, 95%)", // Ícone Quase Branco
					tertiary: "hsl(240, 15%, 60%)",  // Ícone Cinza-azulado
				},
				text: {
					default: "hsl(210, 25%, 90%)",   // Texto Principal (Branco-azulado)
					muted: "hsl(240, 15%, 60%)",     // Texto Secundário (Cinza-azulado)
					link: "hsl(180, 100%, 50%)",      // Link Ciano Elétrico
					primary: "hsl(0, 0%, 100%)",     // Texto Branco Puro
					secondary: "hsl(210, 20%, 80%)", // Texto Secundário mais claro
					positive: "hsl(145, 80%, 45%)",  // Texto de Sucesso (Verde Elétrico)
					warning: "hsl(45, 100%, 50%)",   // Texto de Aviso (Amarelo Cibernético)
					critical: "hsl(0, 80%, 85%)",    // Texto Crítico (Rosa Claro)
				},
				button: {
					primary: {
						background: "hsl(327, 90%, 54%)", // Rosa Neon
						hover: "hsl(327, 90%, 60%)",      // Rosa Neon mais claro
						active: "hsl(327, 90%, 48%)",     // Rosa Neon mais escuro
						border: "hsl(327, 100%, 70%, 0.2)",// Borda Rosa Translúcida
					},
					secondary: {
						background: "hsla(250, 25%, 20%, 0.5)", // Roxo Translúcido para efeito de vidro
						hover: "hsla(250, 28%, 24%, 0.7)",      // Roxo Translúcido mais claro
						active: "hsla(250, 30%, 28%, 0.9)",      // Roxo Translúcido mais opaco
						border: "hsl(180, 100%, 50%, 0.3)",      // Borda Ciano
					},
				},
			},
			backdropBlur: {
				'xs': '2px',
				'sm': '4px',
				'md': '8px',
				'lg': '16px',
				'xl': '24px',
			},
			boxShadow: {
				'neon-pink': '0 0 5px hsl(327, 90%, 54%), 0 0 10px hsl(327, 90%, 54%)',
				'neon-cyan': '0 0 5px hsl(180, 100%, 50%), 0 0 10px hsl(180, 100%, 50%)',
			}
		},
		screens: {
			xs: "440px",
			sm: "540px",
			md: "900px",
		},
	},
	plugins: [],
};
