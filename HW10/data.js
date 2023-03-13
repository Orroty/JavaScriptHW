//Задание 1
//1. Поиск в интернете(бесплатные api примеры).
//2. Найти любые данные, на произвольную тему.
//3. Создать файл data.js.
//4. Создать переменную которая будет хранить данные из публичных api.

//    Задание 2
//1. Создать файл index.html.
//2. Подключить data.js.
//3. Сформировать контент из данных(картинка загловок и параграф).
//4. Добавить данный контент в вёрстку.
//5. * Добавить стили при необходимости(по желанию).


//API
//http://api.worldbank.org/v2/country?format=json

const dataInfo = `[
    {
        "id": "ABW",
        "iso2Code": "AW",
        "name": "Aruba",
        "region": {
            "id": "LCN",
            "iso2code": "ZJ",
            "value": "Latin America & Caribbean "
        },
        "adminregion": {
            "id": "",
            "iso2code": "",
            "value": ""
        },
        "incomeLevel": {
            "id": "HIC",
            "iso2code": "XD",
            "value": "High income"
        },
        "lendingType": {
            "id": "LNX",
            "iso2code": "XX",
            "value": "Not classified"
        },
        "capitalCity": "Oranjestad",
        "longitude": "-70.0167",
        "latitude": "12.5167"
    },
    {
        "id": "AFE",
        "iso2Code": "ZH",
        "name": "Africa Eastern and Southern",
        "region": {
            "id": "NA",
            "iso2code": "NA",
            "value": "Aggregates"
        },
        "adminregion": {
            "id": "",
            "iso2code": "",
            "value": ""
        },
        "incomeLevel": {
            "id": "NA",
            "iso2code": "NA",
            "value": "Aggregates"
        },
        "lendingType": {
            "id": "",
            "iso2code": "",
            "value": "Aggregates"
        },
        "capitalCity": "",
        "longitude": "",
        "latitude": ""
    },
    {
        "id": "AFG",
        "iso2Code": "AF",
        "name": "Afghanistan",
        "region": {
            "id": "SAS",
            "iso2code": "8S",
            "value": "South Asia"
        },
        "adminregion": {
            "id": "SAS",
            "iso2code": "8S",
            "value": "South Asia"
        },
        "incomeLevel": {
            "id": "LIC",
            "iso2code": "XM",
            "value": "Low income"
        },
        "lendingType": {
            "id": "IDX",
            "iso2code": "XI",
            "value": "IDA"
        },
        "capitalCity": "Kabul",
        "longitude": "69.1761",
        "latitude": "34.5228"
    },
    {
        "id": "AFR",
        "iso2Code": "A9",
        "name": "Africa",
        "region": {
            "id": "NA",
            "iso2code": "NA",
            "value": "Aggregates"
        },
        "adminregion": {
            "id": "",
            "iso2code": "",
            "value": ""
        },
        "incomeLevel": {
            "id": "NA",
            "iso2code": "NA",
            "value": "Aggregates"
        },
        "lendingType": {
            "id": "",
            "iso2code": "",
            "value": "Aggregates"
        },
        "capitalCity": "",
        "longitude": "",
        "latitude": ""
    },
    {
        "id": "AFW",
        "iso2Code": "ZI",
        "name": "Africa Western and Central",
        "region": {
            "id": "NA",
            "iso2code": "NA",
            "value": "Aggregates"
        },
        "adminregion": {
            "id": "",
            "iso2code": "",
            "value": ""
        },
        "incomeLevel": {
            "id": "NA",
            "iso2code": "NA",
            "value": "Aggregates"
        },
        "lendingType": {
            "id": "",
            "iso2code": "",
            "value": "Aggregates"
        },
        "capitalCity": "",
        "longitude": "",
        "latitude": ""
    },
    {
        "id": "AGO",
        "iso2Code": "AO",
        "name": "Angola",
        "region": {
            "id": "SSF",
            "iso2code": "ZG",
            "value": "Sub-Saharan Africa "
        },
        "adminregion": {
            "id": "SSA",
            "iso2code": "ZF",
            "value": "Sub-Saharan Africa (excluding high income)"
        },
        "incomeLevel": {
            "id": "LMC",
            "iso2code": "XN",
            "value": "Lower middle income"
        },
        "lendingType": {
            "id": "IBD",
            "iso2code": "XF",
            "value": "IBRD"
        },
        "capitalCity": "Luanda",
        "longitude": "13.242",
        "latitude": "-8.81155"
    },
    {
        "id": "ALB",
        "iso2Code": "AL",
        "name": "Albania",
        "region": {
            "id": "ECS",
            "iso2code": "Z7",
            "value": "Europe & Central Asia"
        },
        "adminregion": {
            "id": "ECA",
            "iso2code": "7E",
            "value": "Europe & Central Asia (excluding high income)"
        },
        "incomeLevel": {
            "id": "UMC",
            "iso2code": "XT",
            "value": "Upper middle income"
        },
        "lendingType": {
            "id": "IBD",
            "iso2code": "XF",
            "value": "IBRD"
        },
        "capitalCity": "Tirane",
        "longitude": "19.8172",
        "latitude": "41.3317"
    },
    {
        "id": "AND",
        "iso2Code": "AD",
        "name": "Andorra",
        "region": {
            "id": "ECS",
            "iso2code": "Z7",
            "value": "Europe & Central Asia"
        },
        "adminregion": {
            "id": "",
            "iso2code": "",
            "value": ""
        },
        "incomeLevel": {
            "id": "HIC",
            "iso2code": "XD",
            "value": "High income"
        },
        "lendingType": {
            "id": "LNX",
            "iso2code": "XX",
            "value": "Not classified"
        },
        "capitalCity": "Andorra la Vella",
        "longitude": "1.5218",
        "latitude": "42.5075"
    },
    {
        "id": "ARB",
        "iso2Code": "1A",
        "name": "Arab World",
        "region": {
            "id": "NA",
            "iso2code": "NA",
            "value": "Aggregates"
        },
        "adminregion": {
            "id": "",
            "iso2code": "",
            "value": ""
        },
        "incomeLevel": {
            "id": "NA",
            "iso2code": "NA",
            "value": "Aggregates"
        },
        "lendingType": {
            "id": "",
            "iso2code": "",
            "value": "Aggregates"
        },
        "capitalCity": "",
        "longitude": "",
        "latitude": ""
    },
    {
        "id": "ARE",
        "iso2Code": "AE",
        "name": "United Arab Emirates",
        "region": {
            "id": "MEA",
            "iso2code": "ZQ",
            "value": "Middle East & North Africa"
        },
        "adminregion": {
            "id": "",
            "iso2code": "",
            "value": ""
        },
        "incomeLevel": {
            "id": "HIC",
            "iso2code": "XD",
            "value": "High income"
        },
        "lendingType": {
            "id": "LNX",
            "iso2code": "XX",
            "value": "Not classified"
        },
        "capitalCity": "Abu Dhabi",
        "longitude": "54.3705",
        "latitude": "24.4764"
    },
    {
        "id": "ARG",
        "iso2Code": "AR",
        "name": "Argentina",
        "region": {
            "id": "LCN",
            "iso2code": "ZJ",
            "value": "Latin America & Caribbean "
        },
        "adminregion": {
            "id": "LAC",
            "iso2code": "XJ",
            "value": "Latin America & Caribbean (excluding high income)"
        },
        "incomeLevel": {
            "id": "UMC",
            "iso2code": "XT",
            "value": "Upper middle income"
        },
        "lendingType": {
            "id": "IBD",
            "iso2code": "XF",
            "value": "IBRD"
        },
        "capitalCity": "Buenos Aires",
        "longitude": "-58.4173",
        "latitude": "-34.6118"
    },
    {
        "id": "ARM",
        "iso2Code": "AM",
        "name": "Armenia",
        "region": {
            "id": "ECS",
            "iso2code": "Z7",
            "value": "Europe & Central Asia"
        },
        "adminregion": {
            "id": "ECA",
            "iso2code": "7E",
            "value": "Europe & Central Asia (excluding high income)"
        },
        "incomeLevel": {
            "id": "UMC",
            "iso2code": "XT",
            "value": "Upper middle income"
        },
        "lendingType": {
            "id": "IBD",
            "iso2code": "XF",
            "value": "IBRD"
        },
        "capitalCity": "Yerevan",
        "longitude": "44.509",
        "latitude": "40.1596"
    },
    {
        "id": "ASM",
        "iso2Code": "AS",
        "name": "American Samoa",
        "region": {
            "id": "EAS",
            "iso2code": "Z4",
            "value": "East Asia & Pacific"
        },
        "adminregion": {
            "id": "EAP",
            "iso2code": "4E",
            "value": "East Asia & Pacific (excluding high income)"
        },
        "incomeLevel": {
            "id": "UMC",
            "iso2code": "XT",
            "value": "Upper middle income"
        },
        "lendingType": {
            "id": "LNX",
            "iso2code": "XX",
            "value": "Not classified"
        },
        "capitalCity": "Pago Pago",
        "longitude": "-170.691",
        "latitude": "-14.2846"
    },
    {
        "id": "ATG",
        "iso2Code": "AG",
        "name": "Antigua and Barbuda",
        "region": {
            "id": "LCN",
            "iso2code": "ZJ",
            "value": "Latin America & Caribbean "
        },
        "adminregion": {
            "id": "",
            "iso2code": "",
            "value": ""
        },
        "incomeLevel": {
            "id": "HIC",
            "iso2code": "XD",
            "value": "High income"
        },
        "lendingType": {
            "id": "IBD",
            "iso2code": "XF",
            "value": "IBRD"
        },
        "capitalCity": "Saint John's",
        "longitude": "-61.8456",
        "latitude": "17.1175"
    },
    {
        "id": "AUS",
        "iso2Code": "AU",
        "name": "Australia",
        "region": {
            "id": "EAS",
            "iso2code": "Z4",
            "value": "East Asia & Pacific"
        },
        "adminregion": {
            "id": "",
            "iso2code": "",
            "value": ""
        },
        "incomeLevel": {
            "id": "HIC",
            "iso2code": "XD",
            "value": "High income"
        },
        "lendingType": {
            "id": "LNX",
            "iso2code": "XX",
            "value": "Not classified"
        },
        "capitalCity": "Canberra",
        "longitude": "149.129",
        "latitude": "-35.282"
    },
    {
        "id": "AUT",
        "iso2Code": "AT",
        "name": "Austria",
        "region": {
            "id": "ECS",
            "iso2code": "Z7",
            "value": "Europe & Central Asia"
        },
        "adminregion": {
            "id": "",
            "iso2code": "",
            "value": ""
        },
        "incomeLevel": {
            "id": "HIC",
            "iso2code": "XD",
            "value": "High income"
        },
        "lendingType": {
            "id": "LNX",
            "iso2code": "XX",
            "value": "Not classified"
        },
        "capitalCity": "Vienna",
        "longitude": "16.3798",
        "latitude": "48.2201"
    },
    {
        "id": "AZE",
        "iso2Code": "AZ",
        "name": "Azerbaijan",
        "region": {
            "id": "ECS",
            "iso2code": "Z7",
            "value": "Europe & Central Asia"
        },
        "adminregion": {
            "id": "ECA",
            "iso2code": "7E",
            "value": "Europe & Central Asia (excluding high income)"
        },
        "incomeLevel": {
            "id": "UMC",
            "iso2code": "XT",
            "value": "Upper middle income"
        },
        "lendingType": {
            "id": "IBD",
            "iso2code": "XF",
            "value": "IBRD"
        },
        "capitalCity": "Baku",
        "longitude": "49.8932",
        "latitude": "40.3834"
    },
    {
        "id": "BDI",
        "iso2Code": "BI",
        "name": "Burundi",
        "region": {
            "id": "SSF",
            "iso2code": "ZG",
            "value": "Sub-Saharan Africa "
        },
        "adminregion": {
            "id": "SSA",
            "iso2code": "ZF",
            "value": "Sub-Saharan Africa (excluding high income)"
        },
        "incomeLevel": {
            "id": "LIC",
            "iso2code": "XM",
            "value": "Low income"
        },
        "lendingType": {
            "id": "IDX",
            "iso2code": "XI",
            "value": "IDA"
        },
        "capitalCity": "Bujumbura",
        "longitude": "29.3639",
        "latitude": "-3.3784"
    },
    {
        "id": "BEA",
        "iso2Code": "B4",
        "name": "East Asia & Pacific (IBRD-only countries)",
        "region": {
            "id": "NA",
            "iso2code": "NA",
            "value": "Aggregates"
        },
        "adminregion": {
            "id": "",
            "iso2code": "",
            "value": ""
        },
        "incomeLevel": {
            "id": "NA",
            "iso2code": "NA",
            "value": "Aggregates"
        },
        "lendingType": {
            "id": "",
            "iso2code": "",
            "value": "Aggregates"
        },
        "capitalCity": "",
        "longitude": "",
        "latitude": ""
    }
]`;
