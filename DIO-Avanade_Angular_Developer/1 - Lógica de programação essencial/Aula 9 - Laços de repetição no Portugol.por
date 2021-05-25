programa
{
	
	funcao inicio()
	{
		inteiro base, tab, mult, limite

		base = 0
		escreva("Digite o número da tabuada que deseja ver : ")
		leia(tab)
		escreva("Até quando a tabuada irá? ")
		leia(limite)
		
		faca{
			mult = (base * tab)
			escreva("\n" + mult)
			base = (base + 1)
		}enquanto (base <= limite)

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 71; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */