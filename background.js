
var heo = document.getElementsByClassName('row');
var btn1 = document.createElement("button");
btn1.id = "ro";
btn1.append("GPA");
btn1.className = "waves-effect waves-light btn cyan";
btn1.style.marginLeft = "30px";
heo[3].append(btn1);

var newinput = document.createElement("input");
newinput.className = "input-field col s12 m6 l6 input-sm"
newinput.readOnly = true;
newinput.style.marginLeft = "13%";
newinput.style.backgroundColor = "#EEEEEE";
newinput.style.border = "1px solid #ABADB3";
newinput.style.padding = "5px 5px";
newinput.value = 0;
heo[3].append(newinput);

var result = 0;
$('#sessions').change(function()
{
  newinput.value = 0;
});

$('#ro').click(function()
{

  var cs = [2,3,3,4,2,3,4,4];
  var he = $('td[style*="background-color: #8c2385"]');

  var op = [];
  var k = 0;
  var i =0;
  for(i=0;i<=8;i++)
  {
    if(he.text()[k]=='+')
    {
      op[i-1] = op[i-1] + he.text()[k];
      i--;
    }
    else if(he.text()[k]=='R')
    {
      op[i] = he.text()[k] + he.text()[k+1];
      k++;
    }
    else
    {
      op[i] = he.text()[k];
    }
    k++;
  }
  var mark = [];
  for(i=0;i<op.length-1;i++)
  {
    if(op[i]=='O')
    {
      mark[i] = 10;
    }
    else if(op[i]=='A+')
    {
      mark[i] = 9;
    }
    else if(op[i]=='A')
    {
      mark[i] = 8;
    }
    else if(op[i]=='B+')
    {
      mark[i] = 7;
    }
    else if(op[i]=='B')
    {
      mark[i] = 6;
    }
    else if(op[i]=='RA')
    {
      mark[i] = 0;
    }
  }

  var add = 0;
  result = 0;
  for(i=0;i<mark.length;i++)
  {
    result = result + cs[i] * mark[i];
    add = add + cs[i];
  }

  result = result / add;

  newinput.value = result;


});
