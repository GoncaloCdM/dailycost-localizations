/*
 * DailyCost Localization
 * ----------------------
 * Greek
 * by Efthymis Takos | Ελληνική Μετάφραση Ευθύμης Τάκος
 *
 */

(function(app) {
  "use strict";

	app.addLanguage("el", {

		preference: {
			"currency": "EUR".split("_")
		},

		string: {
			"weekdays": "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
			"weekdaysShort": "Κυρ_Δευ_Τρί_Τετ_Πέμ_Παρ_Σάβ".split("_"),
			"pullText": "Νέο ...|Νέο Έ...|Νέο Έξ...|Νέο Έξο...|Νέο Έξοδ...|Νέο Έξοδο...|Νέο Έξοδο!".split("|"),
			// "formatMetaDate": 'MM[<span>]DD[</span>] [<span class="day">]ddd[</span>]',
			"formatMetaDate": '[<strong>]DD[</strong>]/MM',
			"formatSameMonthWeekScope1": '[<strong>]DD[</strong>]',
			"formatSameMonthWeekScope2": '[<strong>]DD[</strong>]/MM',

			"settings": "Ρυθμίσεις",
			"preferences": "Προτιμήσεις",
			"categories": "Κατηγορίες",
			"wallpaper": "Φόντο",
			"general": "Γενικά",
			"accountSettings": "Λογαριασμός",
			"account": "Ο Λογαριασμός μου",
			"sharing": "Διαμοιρασμός",
			"currency": "Νόμισμα",
			"security": "Ασφάλεια",
			"feedback": "Αναφορά",
			"about": "Πληροφορίες",
			"tipsAndTricks": "Συμβουλές & Κόλπα",
			"preview": "Προεπισκόπιση",
			"done": "Tέλος",
			"submit": "Υποβολή",
			"restore": "Επαναφορά",
			"default": "Αρχικό",
			"weekStart": "Έναρξη Εβδομάδας",

			"data": "Δεδομένα",
			"dataExportCSV": "Εξαγωγή CSV μέσω Email",
			"dataExportEmailSubject": "Αρχείο Δεδομένων του DailyCost",
			"dataExportEmailBody": "Απλά και τακτοποιημένα.",

			"date": "Ημερομηνία",
			"sum": "Σύνολο",
			"category": "Κατηγορία",

			"favoriteCurrencies": "Τα Νομίσματά μου",
			"allCurrencies": "Όλα τα Νομίσματα",

			"emptyCatlist": "Ούπς, δεν υπάρχει κάτι προς το παρόν",

			"feedbackEmailSubject": "Αναφορικά με το DailyCost",

			"rollDays": "Ημέρες",
			"rollTotal": "Έξοδα",
			"rollTotalSum": "Σύνολο",

			"note": "Σημείωση",
			"createdOn": "Δημιουργήθηκε την",

			"ratingsTitle": "Βαθμολογήστε το DailyCost",
			"ratingsDescriptions": "Εάν σας άρεσε το DailyCost, θα θέλατε να το βαθμολογήσετε; Δε θα σας πάρει χρόνο. Ευχαριστούμε για τη στήριξή σας!",
			"ratingsButtons": "Βαθμολόγιση,Αργότερα"
		},

		category: {
			"default":        "Γενικά",
			"food":           "Τρόφιμα",
			"food-breakfast": "Πρωινό",
			"food-lunch":     "Μεσημεριανό",
			"food-dinner":    "Δείπνο",
			"drinks":         "Ποτά",
			"groceries":      "Λαχανικά",
			"shopping":       "Ψώνια",

			"personal":       "Προσωπικά",
			"entertain":      "Διασκέδαση",
			"movies":         "Ταινίες",
			"social":         "Κοινωνικά",
			"transport":      "Μεταφορικά",

			"appstore":       "App Store",
			"mobile":         "Κινητό",
			"computer":       "Υπολογιστής",
			"gifts":          "Δώρα",
			"housing":        "Οικιακά",

			"travel":         "Ταξίδια",
			"tickets":        "Εισιτήρια",
			"books":          "Βιβλία",
			"medical":        "Υγεία",
			"transfer":       "Μεταφερόμενο"
		},

		currency: {
			"AED": "Ντιρχάμ Αραβικών Εμιράτων",
				"AFN": "Αφγάνι Αφγανιστάν",
				"ALL": "Λεκ Αλβανίας",
				"AMD": "Ντραμ Αρμενίας",
				"ANG": "Γκίλντα Ολλανδικών Αντιλλών",
				"AOA": "Κουάνζα Αγκόλας",
			"ARS": "Πέσο Αργεντινής",
			"AUD": "Δολλάριο Αυστραλίας",
				"AWG": "Φιορίνι Αρούμπα",
				"AZN": "Νέο Μανάτ Αζερμπαϊτζάν",
				"BAM": "Μετατρέψιμο Μάρκο Βοσνίας",
				"BBD": "Δολλάριο Μπαρμπάντος",
				"BDT": "Τάκα Μπαγκλαντές",
				"BGN": "Λέι Βουλγαρίας",
				"BHD": "Δηνάριο Μπαχρέιν",
				"BIF": "Φράγκο Μπουρούντι",
				"BMD": "Δολλάριο Βερμούδων",
				"BND": "Δολλάριο Μπρουνέι",
				"BOB": "Μπολιβιάνο Βολιβίας",
			"BRL": "Ρεάλ Βραζιλίας",
				"BSD": "Δολλάριο Μπαχάμας",
				"BTN": "Νγκούλτρουμ Μπουτάν",
				"BWP": "Πούλα Μποτσουάνα",
				"BYR": "Ρούβλι Λευκορωσίας",
				"BZD": "Δολλάριο Μπελίζ",
			"CAD": "Δολλάριο Καναδά",
				"CDF": "Φράγκο Κονγκό",
			"CHF": "Φράγκο Ελβετίας",
			"CLP": "Πέσο Χιλής",
			"CNY": "Γουάν Κίνας",
				"COP": "Πέσο Κολομβίας",
				"CRC": "Κολόν Κόστα Ρίκας",
				"CUC": "Μετατρέψιμο Πέσο Κούβας",
				"CUP": "Πέσο Κούβας",
				"CVE": "Εσκούδο Πράσινου Ακρωτηρίου",
			"CZK": "Κορώνα Τσεχίας",
				"DJF": "Φράγκο Τζιμπουτί",
			"DKK": "Κορώνα Δανίας",
				"DOP": "Πέσο Δομινίκας",
				"DZD": "Δηνάριο Αλγερίας",
			"EGP": "Λίρα Αιγύπτου",
				"ERN": "Νάφκα Ερυθραίας",
				"ETB": "Μπιρ Αιθιοπίας",
			"EUR": "Ευρώ",
				"FJD": "Δολλάριο Φίτζι",
				"FKP": "Λίρα Νήσων Φώκλαντ",
			"GBP": "Λίρα Αγγλίας",
				"GEL": "Λάρι Γεωργίας",
				"GGP": "Λίρα Γκουέρνσεϊ",
				"GHS": "Σέντι Γκάνας",
				"GIP": "Λίρα Γιβραλτάρ",
				"GMD": "Δάλασι Γκάμπια",
				"GNF": "Φράγκο Γουϊνέας",
				"GTQ": "Κετσάλ Γουατεμάλας",
				"GYD": "Δολλάριο Γουϊνέας",
			"HKD": "Δολλάριο Χονγκ-Κονγκ",
				"HNL": "Λεμπίρα Ονδούρας",
				"HRK": "Κούνα Κροατίας",
				"HTG": "Γκουρντ Αϊτής",
			"HUF": "Φιορίνι Ουγγαρίας",
			"IDR": "Ρουπία Ινδονησίας",
			"ILS": "Νέο Σεκέλ Ισραήλ",
				"IMP": "Λίρα Νήσου Μαν",
			"INR": "Ρουπία Ινδίας",
				"IQD": "Δηνάριο Ιράκ",
				"IRR": "Ριάλ Ιράν",
				"ISK": "Κορώνα Ισλανδίας",
				"JEP": "Λίρα Τζέρσεϋ",
				"JMD": "Δολλάριο Τζαμάικα",
				"JOD": "Δηνάριο Ιορδανίας",
			"JPY": "Γιεν Ιαπωνίας",
				"KES": "Σελίνι Κένυας",
				"KGS": "Σομ Κιργιστάν",
				"KHR": "Ριέλ Καμπότζης",
				"KMF": "Φράγκο Κομόρες",
				"KPW": "Γουόν Βόρειας Κορέας",
			"KRW": "Γουάν Νοτίου Κορέας",
				"KWD": "Δηνάριο Κουβέιτ",
				"KYD": "Δολλάριο Νήσων Κέιμαν",
				"KZT": "Τέγκε Καζακστάν",
			"LAK": "Κιπ Λάο",
				"LBP": "Λίρα Λιβάνου",
				"LKR": "Ρουπία Σρι Λάνκας",
				"LRD": "Δολλάριο Λιβερίας",
				"LSL": "Λότι Λεσότο",
				"LTL": "Λίτας Λιθουανίας",
				"LVL": "Λατ Λετονίας",
				"LYD": "Δηνάριο Λιβύης",
				"MAD": "Ντιρχάμ Μαρόκου",
				"MDL": "Λέι Μολδαβίας",
				"MGA": "Αριάρι Μαδαγασκάρης",
				"MKD": "Δηνάριο Π.Γ.Δ.Μ.",
				"MMK": "Κυάτ Μιανμάρ",
			"MNT": "Τουγκρίκ Μογγολίας",
				"MOP": "Πατάκα Μακάου",
				"MRO": "Ουγκίγια Μαυριτανίας",
				"MUR": "Ρουπία Μαυρικίου",
				"MVR": "Ρουφίγια Μαλδιβών",
				"MWK": "Κουάτσα Μαλάουϊ",
			"MXN": "Πέσο Μεξικού",
			"MYR": "Ρινγκίτ Μαλαισίας",
				"MZN": "Μετικάλ Μοζαμβίκης",
				"NAD": "Δολλάριο Ναμίμπια",
			"NGN": "Νάιρα Νιγηρίας",
				"NIO": "Κόρντομπα Νικαράγουας",
			"NOK": "Κορώνα Νορβηγίας",
				"NPR": "Ρουπία Νεπάλ",
			"NZD": "Δολλάριο Νέας Ζηλανδίας",
				"OMR": "Ριάλ Ομάν",
				"PAB": "Μπαλμπόα Παναμά",
				"PEN": "Νέο Σολ Περού",
				"PGK": "Κίνα Νέας Γουϊνέας",
			"PHP": "Πέσο Φιλιππίνων",
				"PKR": "Ρουπία Πακιστάν",
			"PLN": "Ζλότι Πολωνίας",
				"PYG": "Γκουαρανί Παραγουάης",
				"QAR": "Ριάλ Κατάρ",
				"RON": "Νέο Λέι Ρουμανίας",
				"RSD": "Δηνάριο Σερβίας",
			"RUB": "Ρούβλι Ρωσίας",
				"RWF": "Φράγκο Ρουάντας",
			"SAR": "Ριάλ Σαουδικής Αραβίας",
				"SBD": "Δολλάριο Νήσων Σολομώντος",
				"SCR": "Ρουπία Σεϋχελλών",
				"SDG": "Λίρα Σουδάν",
			"SEK": "Κορώνα Σουηδίας",
			"SGD": "Δολλάριο Σιγκαπούρης",
				"SHP": "Λίρα Αγίας Ελένης",
				"SLL": "Λεόνε Σιέρρας Λεόνε",
				"SOS": "Σελίνι Σομαλίας",
				"SPL": "Λουιτζίνο Σεμπόργας",
				"SRD": "Δολλάριο Σουρινάμ",
				"STD": "Ντομπρά Σάο Τομέ",
				"SVC": "Κολόν Σαλβαδόρ",
				"SYP": "Λίρα Συρίας",
				"SZL": "Λιλανγκένι Σουαζιλάνδης",
			"THB": "Μπατ Ταϋλάνδης",
				"TJS": "Σομόνι Τατζικιστάν",
				"TMT": "Μανάτ Τουρκμενιστάν",
				"TND": "Δηνάριο Τυνησίας",
				"TOP": "Παάγκα Τόγκας",
			"TRY": "Λίρα Τουρκίας",
				"TTD": "Δολλάριο Τρινιδάδ",
				"TVD": "Δολλάριο Τουβαλού",
			"TWD": "Δολλάριο Νέας Ταϊβάν",
				"TZS": "Σελίνι Τανζανίας",
			"UAH": "Γρίβνα Ουκρανίας",
				"UGX": "Σελίνι Ουγκάντας",
			"USD": "Δολλάριο Αμερικής",
				"UYU": "Πέσο Ουρουγουάης",
				"UZS": "Σομ Ουζμπεκιστάν",
				"VEF": "Μπολιβάριο Βενεζουέλας",
			"VND": "Ντονγκ Βιετνάμ",
				"VUV": "Βατού Βανουάτου",
				"WST": "Τάλα Σαμόας",
				"XAF": "Φράγκο Κεντρικής Αφρικής CFA BEAC",
				"XAG": "Ουγγιά Ασημιού",
				"XAU": "Ουγγιά Χρυσού",
				"XCD": "Δολλάριο Ανατολικής Καραϊβικής",
				"XDR": "Ειδικό Νόμισμα ΔΝΤ",
				"XOF": "Φράγκο CFA",
				"XPD": "Ουγγιά Παλλάδιου",
				"XPF": "Φράγκο CFP",
				"XPT": "Ουγγιά Πλατίνας",
				"YER": "Ριάλ Υεμένης",
			"ZAR": "Ραντ Νοτίου Αφρικής",
				"ZMW": "Kουάτσα Ζάμπια",
				"ZWD": "Δολλάριο Ζιμπάμπουε"
		},

		tips: [
			{
				title: 'Πώς διαγράφω κάτι;',
				content: ''
			},
			{
				title: 'Πώς παρακολουθώ τα Έσοδα;',
				content: ''
			},
			{
				title: 'Πώς βλέπω τα διαγράμματα;',
				content: ''
			},
			{
				title: 'Πώς δημιουργήθηκε το DailyCost;',
				content: ''
			}
		],

		quotes: [
			'Το Μέλλον είναι γεμάτο μυστικά<br />που το Παρελθόν δε μπορεί να φυλάξει.'
		]
	});

}(DAILYCOST || {}));
