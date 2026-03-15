	document.addEventListener('DOMContentLoaded', () => {
		const unitType = document.getElementById('unit_type');
		const fromUnit = document.getElementById('from_unit');
		const toUnit = document.getElementById('to_unit');
		const inputValue = document.getElementById('input_value');
		const convertButton = document.getElementById('convert_button');
		const resultDiv = document.getElementById('result');
        
        // Liste des unité à modifier si on souhaite ajouté des unité ou des types puis a ajouter dans convertValue
		const UNITS = {
			distance: [ { v: 'm', label: 'mètre (m)' }, { v: 'km', label: 'kilomètre (km)' }, { v: 'cm', label: 'centimètre (cm)' }, { v: 'mi', label: 'mile (mi)' } ],
			masse:    [ { v: 'g', label: 'gramme (g)' }, { v: 'kg', label: 'kilogramme (kg)' } ],
			temperature: [ { v: 'celsius', label: 'Celsius (°C)' }, { v: 'fareneiht', label: 'Fahrenheit (°F)' } ],
			vitesse: [ {v: 'm/s' , label: 'mètre par seconde (m/s)' }, { v: 'km/h', label: 'kilomètre par heure (km/h)' }, { v: 'mph', label: 'miles par heure (mph)' } ]
		};



		function setOptions(selectEl, items){
			selectEl.innerHTML = '';
			items.forEach(it => {
				const o = document.createElement('option');
				o.value = it.v;
				o.textContent = it.label;
				selectEl.appendChild(o);
			});
		}
// Met à jour les unités disponibles selon le type choisi
		function updateUnitOptions(){
			const type = unitType.value;
			const list = UNITS[type] || [];
			setOptions(fromUnit, list);
			setOptions(toUnit, list);
		}

// Fonction principale qui réalise les conversions
		function convertValue(type, value, from, to){
			if (value === '' || isNaN(Number(value))) return NaN;
			const v = Number(value);
            // Test toute les combinaisons par raports au unité (bien verifié que tout les cas sont bon)
			if (type === 'temperature'){
				if (from === to) return v;
				if (from === 'celsius' && to === 'fareneiht') return v * 9/5 + 32;
				if (from === 'fareneiht' && to === 'celsius') return (v - 32) * 5/9;
				return NaN;
			}
             // Pour la disctance    
			if (type === 'distance'){
				if (from === to) return v;
				if (from === 'm' && to === 'km') return v / 1000;
				if (from === 'm' && to === 'cm') return v * 100;
				if (from === 'm' && to === 'mi') return v / 1609.344;
				if (from === 'km' && to === 'm') return v * 1000;
				if (from === 'km' && to === 'cm') return v * 100000;
				if (from === 'km' && to === 'mi') return v * 0.621371;
				if (from === 'cm' && to === 'm') return v / 100;
				if (from === 'cm' && to === 'km') return v / 100000;
				if (from === 'cm' && to === 'mi') return v / 160934.4;
				if (from === 'mi' && to === 'm') return v * 1609.344;
				if (from === 'mi' && to === 'km') return v / 0.621371;
				if (from === 'mi' && to === 'cm') return v * 160934.4;
				return NaN;
			}
            // Pour la masse    
			if (type === 'masse'){
				if (from === to) return v;
				if (from === 'g' && to === 'kg') return v / 1000;
				if (from === 'kg' && to === 'g') return v * 1000;
				return NaN;
			}
             // Pour la vitesse
			if (type === 'vitesse'){
				if (from === to) return v;
				if (from === 'm/s' && to === 'km/h') return v * 3.6;
				if (from === 'km/h' && to === 'm/s') return v / 3.6;
				if (from === 'm/s' && to === 'mph') return v * 2.23694;
				if (from === 'mph' && to === 'm/s') return v / 2.23694;
				if (from === 'km/h' && to === 'mph') return v / 1.60934;
				if (from === 'mph' && to === 'km/h') return v * 1.60934;
				return NaN;
			}

			return NaN;
		}

		function showResult(val){
			if (isNaN(val)) resultDiv.textContent = 'Impossible de convertir';
			else resultDiv.textContent = String(Number(val.toPrecision(12)));
		}

		updateUnitOptions();
		unitType.addEventListener('change', updateUnitOptions);

		convertButton.addEventListener('click', () => {
			const type = unitType.value;
			const from = fromUnit.value;
			const to = toUnit.value;
			const val = inputValue.value;
			const res = convertValue(type, val, from, to);
			showResult(res);
		});
	});
