
import * as readline from "readline-sync";
import { colors } from "./util/colors";

export function main () {

let opcao: number;

while (true) {

    console.clear();

    console.log(colors.bg.black, colors.fg.bluestrong,
                "***************************************");
    console.log("                                        ")
    console.log("        BANCO DO BRAZIL COM Z");
    console.log("                                        ")
    console.log("***************************************");
    console.log("[1]" + " - Criar conta");
    console.log("[2]" + " - Listar todas as contas");
    console.log("[3]" + " - Buscar conta por número");
    console.log("[4]" + " - Atualizar dados da conta");
    console.log("[5]" + " - Apagar conta");
    console.log("[6]" + " - Sacar");
    console.log("[7]" + " - Depositar");
    console.log("[8]" + " - Transferir valores entre contas");
    console.log("[9]" + " - Sair");
    console.log("                                        ")
    console.log("***************************************");
    console.log("                                        ",
                colors.reset);

    console.log("Digite a opcão desejada: ");
    opcao = readline.questionInt("");

    if (opcao == 9) {
        console.log(colors.fg.greenstrong,
                    "/n Banco do Brazil com Z - o seu futuro começa aqui!")
        sobre();
        console.log(colors.reset, "")
        process.exit(0);
    }

    switch (opcao) {
        case 1:
            console.log(colors.fg.whitestrong,
                        "\n\nCriar conta\n\n", colors.reset);

            keyPress();
            break;

        case 2:
            console.log(colors.fg.whitestrong,
                        "\n\n Listar todas as contas \n\n", colors.reset);

            keyPress();
            break;
        
        case 3:
            console.log(colors.fg.whitestrong,
                        "\n\n Consultar dados da conta - por número \n\n", colors.reset);

            keyPress();
            break;

        case 4:
            console.log(colors.fg.whitestrong,
                        "\n\n Atualizar dados da conta \n\n", colors.reset);

            keyPress();
            break;
        
        case 5:
            console.log(colors.fg.whitestrong,
                        "\n\n Apagar uma conta \n\n", colors.reset);

            keyPress();
            break;
        
        case 6:
            console.log(colors.fg.whitestrong,
                        "\n\n Saque \n\n", colors.reset)

            keyPress();
            break;
        
        case 7:
            console.log(colors.fg.whitestrong,
                        "\n\n Depósito \n\n", colors.reset);

            keyPress();
            break;
        
        case 8:
            console.log(colors.fg.whitestrong,
                        "\n\n Transferência entre contas \n\n", colors.reset);

            keyPress();
            break;
        
        default:
            console.log(colors.fg.whitestrong,
                        "/n Opção inválida /n", colors.reset);

            keyPress();
            break;

        }
    }
}
function sobre(): void {
    console.log("/n**********************************");
    console.log("Projeto desenvolvido por: Giovanna Roberta");
    console.log("Generation Brasil - giovannaro@genstudents.org");
    console.log("");
        console.log("***********************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    readline.question("\n Pressione para continuar...");
}

main();