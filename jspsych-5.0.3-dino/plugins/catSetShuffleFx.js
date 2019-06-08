function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
	return(array)
}

function catsForJudgFx(){
	var catset_init = [0,1,2,3,4,5];
	catset_init = shuffleArray(catset_init)
	var catset = [];
	for(i = 5; i >= 0; i--){
		iCat = catset_init[i]
		catset_init.pop(i)
		if(iCat==4){
			iCat = shuffleArray([4,5])[0]
		}else if(iCat==5){
			iCat = shuffleArray([6,7])[0]
		}
		catset.push(iCat)
	}
	return(catset)
}

function j_i_for_noMatchFx (x){
	var j_i_new = Math.floor(Math.random() * (6 - 0) ) + 0
	if(j_i_new==x){
		while(j_i_new==x){
			var j_i_new = Math.floor(Math.random() * (6 - 0) ) + 0
		}
	}
	var out = [x,j_i_new]
	return(j_i_new)
}