/****************************************************************************************************************/
/* This is an ugly collection of working code.
/* 
/* My plans to use fubctions objects, properties, and methods came
/* undone likely due to scope issues of functions inside of functions.
/* 
/* Once the logic was set, the plan was to lean it out a bit.
/* With the deadline approaching and next week's homework waiting,
/* An ugly, inefficient, but working version is all I could manage.
/*
/* My apologies if you have to pour through this!
/*****************************************************************************************************************/

var CharlieChar = {
    attack: 5,
    growBy: 2,
    hitpts: 120,
    returnATKs: function () {
        return this.attack;
    },
    returnHPs: function () {
        return this.hitpts;
    },
    returnGrowBy: function () {
        return this.growBy;
    },
    setAttack: function (inputVal) {
        this.attack = inputVal;
    },
}

var PattyChar = {
    attack: 8,
    growBy: 1,
    hitpts: 140,
    returnATKs: function () {
        return this.attack;
    },
    returnHPs: function () {
        return this.hitpts;
    },
    returnGrowBy: function () {
        return this.growBy;
    },
    setAttack: function (inputVal) {
        this.attack = inputVal;
    },
}

var LucyChar = {
    attack: 7,
    growBy: 1,
    hitpts: 150,
    returnATKs: function () {
        return this.attack;
    },
    returnHPs: function () {
        return this.hitpts;
    },
    returnGrowBy: function () {
        return this.growBy;
    },
    setAttack: function (inputVal) {
        this.attack = inputVal;
    },
}

var LinusChar = {
    attack: 6,
    growBy: 2,
    hitpts: 130,
    returnATKs: function () {
        return this.attack;
    },
    returnHPs: function () {
        return this.hitpts;
    },
    returnGrowBy: function () {
        return this.growBy;
    },
    setAttack: function (inputVal) {
        this.attack = inputVal;
    },
}

var firstBout = true;
var needNewDefender = true;
var characterSelected = false;
var enemySelected = false;
var charReference = "";
var charAttacker = "";
var charDefender = "";
var winCount = 0;
var attackResult = 0;
var defendResult = 0;
var attackerHitPoints = 0;
var defenderHitPoints = 0;
var attackerAttackValues = 0;
var defenderAttackValues = 0;
var attackerGrowthValues = 0;
var defenderGrowthValues = 0;

function selectChar(clickTarget) {
    if (clickTarget === "character_1") {
        charReference = "CharlieChar";
    }
    if (clickTarget === "character_2") {
        charReference = "PattyChar";
    }
    if (clickTarget === "character_3") {
        charReference = "LucyChar";
    }
    if (clickTarget === "character_4") {
        charReference = "LinusChar";
    }
    return charReference;
}

/*************************************************************************************/
/* --- The Main Game
/*************************************************************************************/

$(document).ready(function () {

    $(".characterImage").click(function () {
        var clickTarget = $(this).attr("id");

/*************************************************************************************/
/* --- Pick a Character
/*************************************************************************************/
        selectChar(clickTarget);

        if (characterSelected === false) {
            if (charReference === "CharlieChar") {
                characterSelected = true;
                charAttacker = "CharlieChar";
                $("#charBox1").appendTo("#attackImageArea");
                $('#charBox1').css('background-color', 'red');
                $('#charBox1').css('color', 'yellow');
                $("#character_1").attr("src", "./assets/images/charlie_gun.jpg");
                $("#charBox2").appendTo("#enemyImageArea1");
                $("#charBox3").appendTo("#enemyImageArea2");
                $("#charBox4").appendTo("#enemyImageArea3");
            }
            if (charReference === "PattyChar") {
                characterSelected = true;
                charAttacker = "PattyChar";
                $("#charBox2").appendTo("#attackImageArea");
                $('#charBox2').css('background-color', 'red');
                $('#charBox2').css('color', 'yellow');
                $("#character_2").attr("src", "./assets/images/patty_gun.jpg");
                $("#charBox1").appendTo("#enemyImageArea1");
                $("#charBox3").appendTo("#enemyImageArea2");
                $("#charBox4").appendTo("#enemyImageArea3");
            }
            if (charReference === "LucyChar") {
                characterSelected = true;
                charAttacker = "LucyChar";
                $("#charBox3").appendTo("#attackImageArea");
                $('#charBox3').css('background-color', 'red');
                $('#charBox3').css('color', 'yellow');
                $("#character_3").attr("src", "./assets/images/lucy_gun.jpg");
                $("#charBox1").appendTo("#enemyImageArea1");
                $("#charBox2").appendTo("#enemyImageArea2");
                $("#charBox4").appendTo("#enemyImageArea3");
            }
            if (charReference === "LinusChar") {
                characterSelected = true;
                charAttacker = "LinusChar";
                $("#charBox4").appendTo("#attackImageArea");
                $('#charBox4').css('background-color', 'red');
                $('#charBox4').css('color', 'yellow');
                $("#character_4").attr("src", "./assets/images/Linus_gun.jpg");
                $("#charBox1").appendTo("#enemyImageArea1");
                $("#charBox2").appendTo("#enemyImageArea2");
                $("#charBox3").appendTo("#enemyImageArea3");
            }
        }

/*************************************************************************************/
/* --- If you already have an attacker, your next choice will be the first enemy
/*************************************************************************************/
        else if ((characterSelected === true) && (enemySelected === false)) {
            $("#messageArea1").text("");
            $("#messageArea2").text("");
            $("#messageArea3").text("");
            if ((charReference === "CharlieChar") && (charAttacker != "CharlieChar")) {
                enemySelected = true;
                charDefender = "CharlieChar";
                $("#charBox1").appendTo("#defenderImageArea");
                $('#charBox1').css('background-color', 'black');
                $('#charBox1').css('color', 'white');
                $("#character_1").attr("src", "./assets/images/charlie_gun.jpg");
            }
            if ((charReference === "PattyChar") && (charAttacker != "PattyChar")) {
                enemySelected = true;
                charDefender = "PattyChar";
                $("#charBox2").appendTo("#defenderImageArea");
                $('#charBox2').css('background-color', 'black');
                $('#charBox2').css('color', 'white');
                $("#character_2").attr("src", "./assets/images/patty_gun.jpg");
            }
            if ((charReference === "LucyChar") && (charAttacker != "LucyChar")) {
                enemySelected = true;
                charDefender = "LucyChar";
                $("#charBox3").appendTo("#defenderImageArea");
                $('#charBox3').css('background-color', 'black');
                $('#charBox3').css('color', 'white');
                $("#character_3").attr("src", "./assets/images/lucy_gun.jpg");
            }
            if ((charReference === "LinusChar") && (charAttacker != "LinusChar")) {
                enemySelected = true;
                charDefender = "LinusChar";
                $("#charBox4").appendTo("#defenderImageArea");
                $('#charBox4').css('background-color', 'black');
                $('#charBox4').css('color', 'white');
                $("#character_4").attr("src", "./assets/images/Linus_gun.jpg");
            }
        }
    });


/*************************************************************************************/
/* --- The champions have been chosen - Wait for the attack to happen
/*************************************************************************************/
    $("#attackButton").click(function () {

        /* Need to know the attackers stats but only on the first fight */
        if (firstBout === true) {
            if (charAttacker === "CharlieChar") {
                attackingAgent = "Charlie";
                attackingName = "Charlie";
                attackerHitPoints = CharlieChar.returnHPs();
                attackerAttackValues = CharlieChar.returnATKs();
                attackerGrowthValues = CharlieChar.returnGrowBy();
            }
            else if (charAttacker === "PattyChar") {
                attackingAgent = "Patty";
                attackingName = "Peppermint Patty";
                attackerHitPoints = PattyChar.returnHPs();
                attackerAttackValues = PattyChar.returnATKs();
                attackerGrowthValues = PattyChar.returnGrowBy();
            }
            else if (charAttacker === "LucyChar") {
                attackingAgent = "Lucy";
                attackingName = "Lucy";
                attackerHitPoints = LucyChar.returnHPs();
                attackerAttackValues = LucyChar.returnATKs();
                attackerGrowthValues = LucyChar.returnGrowBy();
            }
            else if (charAttacker === "LinusChar") {
                attackingAgent = "Linus";
                attackingName = "Linus";
                attackerHitPoints = LinusChar.returnHPs();
                attackerAttackValues = LinusChar.returnATKs();
                attackerGrowthValues = LinusChar.returnGrowBy();
            }
        }
        /*Need to get the defender's stats once for any newly selected defender is selected */
        if (needNewDefender === true) {
            attackResult = 0;
            if (charDefender === "CharlieChar") {
                defendingAgent = "Charlie";
                defendingName = "Charlie";
                defenderHitPoints = CharlieChar.returnHPs();
                defenderAttackValues = CharlieChar.returnATKs();
                defenderGrowthValues = CharlieChar.returnGrowBy();
            }
            else if (charDefender === "PattyChar") {
                defendingAgent = "Patty";
                defendingName = "Peppermint Patty";
                defenderHitPoints = PattyChar.returnHPs();
                defenderAttackValues = PattyChar.returnATKs();
                defenderGrowthValues = PattyChar.returnGrowBy();
            }
            else if (charDefender === "LucyChar") {
                defendingAgent = "Lucy";
                defendingName = "Lucy";
                defenderHitPoints = LucyChar.returnHPs();
                defenderAttackValues = LucyChar.returnATKs();
                defenderGrowthValues = LucyChar.returnGrowBy();
            }
            else if (charDefender === "LinusChar") {
                defendingAgent = "Linus";
                defendingName = "Linus";
                defenderHitPoints = LinusChar.returnHPs();
                defenderAttackValues = LinusChar.returnATKs();
                defenderGrowthValues = LinusChar.returnGrowBy();
            }
        }

/*************************************************************************************/
/* --- Somebody is about to open up a can of whoop-ass!
/*************************************************************************************/

        /*This traps the attack unless we have both an attacker and defender */
        if ((characterSelected === true) && (enemySelected === true)) {
            /*This makes sure both the attacker and defender are still alive */
            if ((attackerHitPoints > 0) && (defenderHitPoints > 0)) {
                firstBout = false;
                needNewDefender = false;

                /*Commence with the beatdown and post the results to the character box */
                attackResult = parseInt(defenderHitPoints) - parseInt(attackerAttackValues);
                $("#messageArea1").text("You attacked " + defendingName + " for " + attackerAttackValues + " points damage!")
                defenderHitPoints = attackResult;
                attackerAttackValues = parseInt(attackerAttackValues) + parseInt(attackerGrowthValues);
                var d_Update = "#" + defendingAgent + "HP";
                $(d_Update).text(defenderHitPoints);

                /*Dead men don't attack back so make sure they are still alive */
                if (attackResult > 0) {
                    defendResult = parseInt(attackerHitPoints) - parseInt(defenderAttackValues);
                    $("#messageArea2").text(defendingName + " attacked you for " + defenderAttackValues + " points damage!");
                    attackerHitPoints = defendResult;
                    var a_Update = "#" + attackingAgent + "HP";
                    $(a_Update).text(attackerHitPoints);
                }
            }

/*************************************************************************************/
/* --- What happens if I win, you ask?
/*************************************************************************************/

            if ((attackerHitPoints > 0) && (defenderHitPoints <= 0)) {
                enemySelected = false;
                needNewDefender = true;
                winCount++;

                /*Be sure to clear the battlefield of the dead or be haunted forever */
                if (charDefender === "CharlieChar") {
                    var updateAttackPoints = CharlieChar.setAttack(attackerAttackValues);
                    $('#charBox1').hide();
                    $("#charBox1").appendTo("#homeChar1");
                }
                else if (charDefender === "PattyChar") {
                    $('#charBox2').hide();
                    $("#charBox2").appendTo("#homeChar2");
                }
                else if (charDefender === "LucyChar") {
                    $('#charBox3').hide();
                    $("#charBox3").appendTo("#homeChar3");
                }
                else if (charDefender === "LinusChar") {
                    $('#charBox4').hide();
                    $("#charBox4").appendTo("#homeChar4");
                }

                /*Let the world know and tell generations of your deeds */
                $("#messageArea1").text("You destroyed " + defendingName + ".");
                if (winCount < 3) {
                    $("#messageArea2").text(" Choose your next victim!");
                }
                else {
                    /*If you beat them all you get a slightly better PR campaign */
                    $("#messageArea1").text(" You destroyed them all!");
                    $("#messageArea2").text("");
                    $("#messageArea3").text("You Win!");
                }
            }

/*************************************************************************************/
/* --- If you found the only way to have your ass handed to you
/*************************************************************************************/

            if ((attackerHitPoints <= 0) && (defenderHitPoints > 0)) {
                firstBout = false;
                characterSelected = false;
                /*Send you off to the hall of shame */
                if (charAttacker === "CharlieChar") {
                    var updateAttackPoints = CharlieChar.setAttack(attackerAttackValues);
                    $('#charBox1').hide();
                    $("#charBox1").appendTo("#homeChar1");
                }
                else if (charAttacker === "PattyChar") {
                    $('#charBox2').hide();
                    $("#charBox2").appendTo("#homeChar2");
                }
                else if (charAttacker === "LucyChar") {
                    $('#charBox3').hide();
                    $("#charBox3").appendTo("#homeChar3");
                }
                else if (charAttacker === "LinusChar") {
                    $('#charBox4').hide();
                    $("#charBox4").appendTo("#homeChar4");
                }
                /*Notifying your next of kin and preparing to spend the insurance money */
                $("#messageArea1").text("You were destroyed by " + defendingName + ".");
                $("#messageArea2").text("");
                $("#messageArea3").text("You Lost!");
            }
        }
    });
});
