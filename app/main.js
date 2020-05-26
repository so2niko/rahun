let preferences = {
    el : ".logic",
    data : {
        isShow : false,
        bd : '',
        name : '',
        dateDOM : document.querySelector('#dateInp'),
        isBadDate : false,
        nums : [
            {
                whatNum : "Число души",
                num : 0,
                planet : 'Земля2',
                src : "#"
            },
            {
                whatNum : "Число судьбы",
                num : 0,
                planet : 'Земля2',
                src : "#"
            },
            {
                whatNum : "Число имени",
                num : 0,
                planet : 'Земля2',
                src : "#"
            },
        ]
    },
    methods : {
        showNumbers : function(){
            let regDate = /^[\/\-\.\,\s]*[0-3]?[0-9][\/\-\.\,\s]*[01]?[0-9][\s\/\-\.\,]*[0-9][0-9][0-9][0-9][\/\-\.\,\s]*$/gi,
                regName = /[\/\-\.\,\s]*[а-яa-z\s]+[\/\-\.\,\s]*/gi;

            if(regDate.test(this.bd) == false){
                this.bd = "Ошибка в дате";
                return 0;
            }

            if(regName.test(this.name) == false){             
                this.name = "Ошибка в имени";
                return 0;
            }

            //получить числа, сформировать массив
            let soulNum = soulNumCalc(this.bd.split(/[\.\-\/\,\*\+]/g)[0]),
                soulPlanet = returnSpaceBody(soulNum),
                fateNum = fateNumCalc(this.bd),
                fatePlanet = returnSpaceBody(fateNum),
                nameNum = nameNumCalc(this.name),
                namePlanet = returnSpaceBody(nameNum);
                

            //Занести ответ в массив    
            this.nums[0].num = soulNum;
            this.nums[0].planet = soulPlanet[0];
            this.nums[0].src = soulPlanet[2];

            
            this.nums[1].num = fateNum;
            this.nums[1].planet = fatePlanet[0];
            this.nums[1].src = fatePlanet[2];
            
            this.nums[2].num = nameNum;
            this.nums[2].planet = namePlanet[0];
            this.nums[2].src = namePlanet[2];
            
            //Показать колонку с ответом    
            this.isShow = true;

        }
    }
};

const vApp = new Vue(preferences);

