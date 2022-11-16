/* eslint-disable max-len */
/* Requires */
const fs = require('fs');
const path = require('path');
const packets = require('./package.json');
let envInfo = require('./utils.json');

/* Define o local completo na envInfo para usar o reload */
envInfo.parameters.location.value = __filename;

/* Função que faz a leitura */
function treeCommand(
    localePlace = envInfo.parameters.checkstats.arguments.localePlace.value,
) {
    /* Lê os arquivos do diretório */
    const folderInfo = fs.lstatSync(localePlace);

    /* Insere na Object os dados padrões */
    const dataInfo = {
        accessedAt: folderInfo.atimeMs,
        changedAt: folderInfo.mtimeMs,
        createdAt: folderInfo.birthtimeMs,
        directories: 0,
        files: 0,
        name: path.basename(localePlace),
        path: path.resolve(localePlace),
        size: `${(folderInfo.size / 1024).toFixed(2)} KB`,
        type: 'directory',
        contents: [],
    };

    /* Verifica se é um diretório */
    if (folderInfo.isDirectory()) {
        /* Adquire os arquivos nele */
        envInfo.parameters.namings.value = fs.readdirSync(localePlace);

        /* Filtra apenas diretório */
        envInfo.parameters.folders.value = envInfo.parameters.namings.value.filter((fol) => fs.lstatSync(path.join(localePlace, fol)).isDirectory());

        /* Filtra apenas arquivos */
        envInfo.parameters.archives.value = envInfo.parameters.namings.value.filter((fil) => fs.lstatSync(path.join(localePlace, fil)).isFile());

        /* Define a quantidade de diretórios */
        dataInfo.directories = envInfo.parameters.folders.value.length;

        /* Define a quantidade de arquivos */
        dataInfo.files = envInfo.parameters.archives.value.length;

        /* Adquire os arquivos e diretórios dos diretórios dentro do diretório raiz */
        dataInfo.contents = envInfo.parameters.namings.value.map((dir) => treeCommand(path.join(localePlace, dir)));

        /* Se não for um diretório */
    } else {
        /* Define como arquivo */
        dataInfo.type = 'file';
    }

    /* Insere na envInfo */
    envInfo.results.value = dataInfo;

    /* Insere o sucesso */
    envInfo.parameters.success.value = true;

    /* Retorna os dados */
    return dataInfo;
}

/* Função que faz um 'tree' dos arquivos */
function treeCaller(
    placeLocation = envInfo.parameters.tree.arguments.placeLocation.value,
) {
    /* Try - Catch para casos de erro */
    try {
        /* Define o local */
        envInfo.parameters.stock.value = placeLocation;

        /* Caso o local seja invalido */
        if (!fs.existsSync(envInfo.parameters.stock.value)) {
            /* Configura como pasta local */
            envInfo.parameters.stock.value = envInfo.parameters.tree.arguments.placeLocation.value;
        }

        /* Executa a função de leitura */
        treeCommand(envInfo.parameters.stock.value);

        /* Define se deve resetar após finalizar */
        if (envInfo.parameters.finish.value === true) {
            /* setTimeout para poder retornar */
            setTimeout(() => {
                /* Reseta a envInfo */
                envInfo.parameters.revert.value();

                /* Reseta conforme o tempo */
            }, envInfo.parameters.wait.value);
        }

        /* Retorna os dados */
        return envInfo;

        /* Caso der erro */
    } catch (error) {
        /* Verifica se pode postar na tela */
        if (envInfo.parameters.error.value === true) {
            /* Reporta o erro */
            console.error(error);
        }

        /* Determina se reseta quando der erro */
        if (envInfo.parameters.reset.value === true) {
            /* setTimeout para poder retornar */
            setTimeout(() => {
                /* Reseta a envInfo */
                envInfo.parameters.revert.value();

                /* Reseta conforme o tempo */
            }, envInfo.parameters.wait.value);
        }

        /* Determina a mensagem de falha */
        envInfo.parameters.message.value = error.message;

        /* Determina o código da falha */
        envInfo.parameters.code.value = error.code || 'Other';

        /* Determina o parâmetro de sucesso para false */
        envInfo.parameters.success.value = false;

        /* Retorna a envInfo */
        return envInfo;
    }
}

/* Função que retorna todo o arquivo */
function ambientDetails() {
    /* Retorna a envInfo */
    return envInfo;
}

/* Retorna a package.json */
function packageJSON() {
    /* Retorna a package.json */
    return packets;
}

/* Função que reseta tudo */
function resetAmbient(
    changeKey = {},
) {
    /* Define a envInfo padrão */
    envInfo = JSON.parse(fs.readFileSync(`${__dirname}/utils.json`));

    /* Define se algum valor deve ser salvo */
    if (Object.keys(changeKey).length !== 0) {
        /* Faz a listagem de keys */
        Object.keys(changeKey).forEach((key) => {
            /* Edita se a key existir */
            if (Object.keys(envInfo).includes(key) && key !== 'developer') {
                /* Edita a key customizada */
                envInfo[key] = changeKey[key];
            }
        });
    }

    /* Insere a função na envInfo novamente */
    envInfo.parameters.checkstats.value = treeCommand;

    /* Insere a ambient na envInfo */
    envInfo.parameters.ambient.value = ambientDetails;

    /* Insere a tree na envInfo */
    envInfo.parameters.tree.value = treeCaller;

    /* Insere a revert na envInfo */
    envInfo.parameters.revert.value = resetAmbient;

    /* Insere a package na envInfo */
    envInfo.parameters.pack.value = packageJSON;

    /* Gera a module exports */
    module.exports = {
        [envInfo.name]: {
            [envInfo.exports.env]: envInfo.parameters.ambient.value,
            [envInfo.exports.init]: envInfo.parameters.tree.value,
            [envInfo.exports.reset]: envInfo.parameters.revert.value,
            [envInfo.exports.pack]: envInfo.parameters.pack.value,
        },
        Developer: 'KillovSky',
        Projects: 'https://github.com/KillovSky',
    };

    /* Retorna o exports */
    return module.exports;
}

/* Constrói a envInfo */
resetAmbient();
