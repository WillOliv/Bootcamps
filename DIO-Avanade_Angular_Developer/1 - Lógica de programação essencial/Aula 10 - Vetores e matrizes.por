programa
{
	
	funcao inicio()
	{
		inteiro base
		base = 0
		
		cadeia nome[3]
		nome[0] = "João"
		nome[1] = "Maria"  
		nome[2] = "Ana" 
		
		cadeia cidade[3]
		cidade[0] = "São Paulo"
		cidade[1] = "Ribeirão Preto"
		cidade[2] = "Manaus" 

		cadeia fone[3]
		fone[0] = "(11) 9999-5241"
		fone[1] = "(16) 9999-8596"
		fone[2] = "(92) 9999-8574"

		faca{
			escreva("\n", "Nome : ", nome[base])
			escreva("\n", "Cidade : ", cidade[base])
			escreva("\n", "Telefone : ", fone[base], "\n")
			base++

		}enquanto (base<=2)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 63; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */