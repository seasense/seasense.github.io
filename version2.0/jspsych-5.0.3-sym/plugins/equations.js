
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
function eqGeneFx () {
	// select type of equation
	equation_type = getRndInteger(1,diff_level);
	//equation_type=15;
	if(equation_type==1){
		a = getRndInteger(1,9)
		b = getRndInteger(1,9)
		coin = (Math.floor(Math.random() * 2) == 0)
	    if(coin){
			var result = a+b;
			var required_response = 1;
	    }else{
			a2 = getRndInteger(1,9)
			b2 = getRndInteger(1,9)
			var result = a2+b2;
			if(result==(a+b)){result += 3}
			var required_response = 0;
	    }
		var displayed_equation = ""+a+" + "+b+" = "+result+"";
		return {displayed_equation: displayed_equation, required_response: required_response}
	}
	if(equation_type==2){
		a = getRndInteger(1,9)
		b = getRndInteger(1,9)
		coin = (Math.floor(Math.random() * 2) == 0)
	    if(coin){
			var result = a-b;
			var required_response = 1;
	    }else{
			a2 = getRndInteger(1,9)
			b2 = getRndInteger(1,9)
			var result = a2-b2;
			if(result==(a-b)){result += 3}
			var required_response = 0;
	    }
		var displayed_equation = ""+a+" - "+b+" = "+result+"";
		return {displayed_equation: displayed_equation, required_response: required_response}
	}
	if(equation_type==3){
		a = getRndInteger(1,9)
		b = getRndInteger(1,9)
		c = getRndInteger(1,9)
		coin = (Math.floor(Math.random() * 2) == 0)
	    if(coin){
			var result = a+b+c;
			var required_response = 1;
	    }else{
			a2 = getRndInteger(1,9)
			b2 = getRndInteger(1,9)
			c2 = getRndInteger(1,9)
			var result = a2+b2+c2;
			if(result==(a+b+c)){result += 3}
			var required_response = 0;
	    }
		var displayed_equation = ""+a+" + "+b+" + "+c+" = "+result+"";
		return {displayed_equation: displayed_equation, required_response: required_response}
	}
	if(equation_type==4){
		a = getRndInteger(1,20)
		b = getRndInteger(1,20)
		c = getRndInteger(1,20)
		coin = (Math.floor(Math.random() * 2) == 0)
	    if(coin){
			var result = a-b-c;
			var required_response = 1;
	    }else{
			a2 = getRndInteger(1,20)
			b2 = getRndInteger(1,20)
			c2 = getRndInteger(1,20)
			var result = a2-b2-c2
			if(result==(a-b-c)){result += 3}
			var required_response = 0;
	    }
		var displayed_equation = ""+a+" - "+b+" - "+c+" = "+result+"";
		return {displayed_equation: displayed_equation, required_response: required_response}
	}
	
	if(equation_type==5){
		a = getRndInteger(51,99)
		b_min = 1/10*10
		b_max = a/10*10+8
		b = getRndInteger(b_min,b_max)
		coin = (Math.floor(Math.random() * 2) == 0)
	    if(coin){
			var result = a-b;
			var required_response = 1;
	    }else{
			a2 = getRndInteger(51,99)
			b_min = a2/10*10
			b_max = a2/10*10+8
			b2 = Math.round(getRndInteger(b_min,b_max)*100)/100
			var result = a2-b2;
			if(result==(a-b)){result += 3}
			var required_response = 0;
	    }
		var displayed_equation = ""+a+" - "+b+" = "+result+"";
		return {displayed_equation: displayed_equation, required_response: required_response}
	}
	if(equation_type==6){
		a = getRndInteger(50,99)
		b_min = (a/10)*10+1
		b_max = (a/10-1)*10+9
		b = getRndInteger(b_min,b_max)
		coin = (Math.floor(Math.random() * 2) == 0)
	    if(coin){
			var result = a-b;
			var required_response = 1;
	    }else{
			a2 = getRndInteger(51,99)
			b_min = (a/10)*10+1
			b_max = (a/10-1)*10+9
			b2 = Math.round(getRndInteger(b_min,b_max)*100)/100
			var result = a2-b2;
			if(result==(a-b)){result += 3}
			var required_response = 0;
	    }
		var displayed_equation = ""+a+" - "+b+" = "+result+"";
		return {displayed_equation: displayed_equation, required_response: required_response}
	}
	
	if(equation_type==7){
		a = getRndInteger(1,9)
		b = getRndInteger(1,9)
		c = getRndInteger(1,17)
		coin = (Math.floor(Math.random() * 2) == 0)
	    if(coin){
			var result = a+b-c;
			var required_response = 1;
	    }else{
			a2 = getRndInteger(1,9)
		  b2 = getRndInteger(1,9)
		  c2 = getRndInteger(1,17)
			var result = a2+b2-c2;
			if(result==(a+b-c)){result += 3}
			var required_response = 0;
	    }
		var displayed_equation = ""+a+" + "+b+" - "+c+" = "+result+"";
		return {displayed_equation: displayed_equation, required_response: required_response}
	}
	
		if(equation_type==8){
		a = getRndInteger(11,19)
		b = getRndInteger(11,19)
		c = getRndInteger(13,37)
		coin = (Math.floor(Math.random() * 2) == 0)
	    if(coin){
			var result = a+b-c;
			var required_response = 1;
	    }else{
			a2 = getRndInteger(11,19)
		  b2 = getRndInteger(11,19)
		  c2 = getRndInteger(13,37)
		  var result = a2+b2-c2;
			if(result==(a+b-c)){result += 3}
			var required_response = 0;
	    }
		var displayed_equation = ""+a+" + "+b+" - "+c+" = "+result+"";
		return {displayed_equation: displayed_equation, required_response: required_response}
	}
	if(equation_type==9){
		a = getRndInteger(2,6)
		b = getRndInteger(2,6)
		c = getRndInteger(3,35)
		coin = (Math.floor(Math.random() * 2) == 0)
	    if(coin){
			var result = (a*b)-c;
			var required_response = 1;
	    }else{
			a2 = getRndInteger(2,6)
		  b2 = getRndInteger(2,6)
		  c2 = getRndInteger(3,35)
		  var result = (a2*b2)-c2;
			if(result==((a*b)-c)){result += 3}
			var required_response = 0;
	    }
		var displayed_equation = "("+a+" * "+b+") - "+c+" = "+result+"";
		return {displayed_equation: displayed_equation, required_response: required_response}
	}
	if(equation_type==10){
		a = getRndInteger(7,11)
		b = getRndInteger(7,11)
		c = getRndInteger(48,120)
		coin = (Math.floor(Math.random() * 2) == 0)
	    if(coin){
			var result = (a*b)-c;
			var required_response = 1;
	    }else{
			a2 = getRndInteger(7,11)
		  b2 = getRndInteger(7,11)
		  c2 = getRndInteger(48,120)
		  var result = (a2*b2)-c2;
			if(result==((a*b)-c)){result += 3}
			var required_response = 0;
	    }
		var displayed_equation = "("+a+" * "+b+") - "+c+" = "+result+"";
		return {displayed_equation: displayed_equation, required_response: required_response}
	}
	if(equation_type==11){
		b = getRndInteger(2,9)
		a = b*getRndInteger(2,9)
		c = getRndInteger(1,8)
		coin = (Math.floor(Math.random() * 2) == 0)
	    if(coin){
			var result = (a/b)-c;
			var required_response = 1;
	    }else{
			b2 = getRndInteger(2,9)
		  a2 = b2*getRndInteger(2,9)
		  c2 = getRndInteger(1,8)
		  var result = (a2/b2)-c2;
			if(result==((a/b)-c)){result += 3}
			var required_response = 0;
	    }
		var displayed_equation = "("+a+" / "+b+") - "+c+" = "+result+"";
		return {displayed_equation: displayed_equation, required_response: required_response}
	}
	if(equation_type==12){
	  c = getRndInteger(2,9)
		temp = c*getRndInteger(2,9)
		b = getRndInteger(2,temp)
		a = temp-b
		coin = (Math.floor(Math.random() * 2) == 0)
	    if(coin){
			var result = (a+b)/c;
			var required_response = 1;
	    }else{
			c2 = getRndInteger(2,9)
		  temp2 = c2*getRndInteger(2,9)
	  	b2 = getRndInteger(2,temp2)
		  a2 = temp-b2
		  var result = (a2+b2)/c2;
			if(result==((a+b)/c)){result += 3}
			var required_response = 0;
	    }
	    var result_rounded = Math.round(result*100)/100
		var displayed_equation = "("+a+" + "+b+") / "+c+" = "+result_rounded+"";
		return {displayed_equation: displayed_equation, required_response: required_response}
	}
};

/*if(equation_type==5){
		a = getRndInteger(20,50)
		b = getRndInteger(10,50)
		c = getRndInteger(10,50)
		coin = (Math.floor(Math.random() * 2) == 0)
	    if(coin){
			var result = a-b-c;
			var required_response = 1;
	    }else{
			a2 = getRndInteger(20,50)
			b2 = getRndInteger(10,50)
			c2 = getRndInteger(10,50)
			var result = a2-b2-c2;
			if(result==(a-b-c)){result += 3}
			var required_response = 0;
	    }
		var displayed_equation = ""+a+" - "+b+" - "+c+" = "+result+"";
		return {displayed_equation: displayed_equation, required_response: required_response}
	}
	if(equation_type==8){
		a = getRndInteger(2,9)
		b = getRndInteger(2,9)
		coin = (Math.floor(Math.random() * 2) == 0)
	    if(coin){
			var result = a/b;
			var required_response = 1;
	    }else{
			a2 = getRndInteger(2,9)
		  b2 = getRndInteger(2,9)
			var result = a2/b2;
			if(result==(a/b)){result += 3}
			var required_response = 0;
	    }
	    var result_rounded = Math.round(result*100)/100
		var displayed_equation = ""+a+" / "+b+" = "+result_rounded+"";
		return {displayed_equation: displayed_equation, required_response: required_response}
	}
	if(equation_type==10){
		a = getRndInteger(2,9)
		b = getRndInteger(11,19)
		coin = (Math.floor(Math.random() * 2) == 0)
	    if(coin){
			var result = a/b;
			var required_response = 1;
	    }else{
			a2 = getRndInteger(2,9)
		  b2 = getRndInteger(11,19)
		  var result = a2/b2;
			if(result==(a/b)){result += 3}
			var required_response = 0;
	    }
	    var result_rounded = Math.round(result*100)/100
		var displayed_equation = ""+a+" / "+b+" = "+result_rounded+"";
		return {displayed_equation: displayed_equation, required_response: required_response}
	}*/
	
