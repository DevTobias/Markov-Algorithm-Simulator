
class MarkovSimulator {

    constructor() {
        this.phi = []; this.psi = []; this.i = []; this.j = [];
        this.len;
        this.verbose = false;
    }

    load_data() {
        let array = [];
        $("table#markov_table tr").each(function() {
            let array_row = [];
            var data = $(this).find('td');
            if (data.length > 0) {
                data.each(function() { 
                    array_row.push($(this).text()); 
                });
                array.push(array_row);
            }
        });

        this.len = array.length;
        for(let i = 0; i < this.len; ++i) {
            this.phi.push(array[i][0]);
            this.psi.push(array[i][1]);
            this.i.push(array[i][2]);
            this.j.push(array[i][3]);
        }
    }

    run(word) {
        let line = 0;
        let pos;

        while(line < this.len) {
            pos = word.indexOf(this.phi[line]);
            if(this.verbose) console.log("Zeile =" + line + ", Wort = " + word + ", Position = " + pos);
            if(pos > -1) {
                word = word.substring(0, pos) + this.psi[line] + word.substring(pos + this.phi[line].length, word.length);
                line = this.i[line];
            } else {
                line = this.j[line];
            }
            if(this.verbose) console.log("Ergebnis = " + word + " goto " + line);
        }
        
        return word;
    }

}

function run_markov() {
    let markov = new MarkovSimulator();
    markov.load_data();
    markov.verbose = true;
    let word = "|||||";
    console.log("Wort = " + word);
    console.log("Ergebnis " + markov.run(word)); 
}