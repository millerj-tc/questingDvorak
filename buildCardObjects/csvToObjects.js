export function GetHennepinCountyCourtNameList(data){
    
    const $data = data.match(/(?<=\n|^)(\s|\w|,)*(?=(GC\-[a-zA-z0-9]+\s|Family\s\d+\s|Brookdale\s\d+\s|Ridgedale\s\d+\s|PSF\s.*\s|BD\s.*\s)(\d{2}\/\d{2}\/\d{4}))/gm);
    
    const $personArr = [];
    
    if($data == null) return [];
    
    for(const d of $data){
        
        let $personLNames = d.match(/.*(?=,)/gm);
        
        let $personFNames = d.match(/(?<=,\s)(\w|-)*/gm);
        
        let $personMNames = d.match(/(?<=,\s.*)(\w|-)+\b/gm); //returns first name as well so must be shifted
        
        if(Array.isArray($personMNames)) $personMNames.shift();
        
        if($personFNames == null || $personLNames == null) {
            
            continue
        } 
        
        if($personFNames!=null) $personFNames = $personFNames.filter(p => p.length > 0);
        
        if($personLNames!=null) $personLNames = $personLNames.filter(p => p.length > 0);
        
        if($personMNames!=null) $personMNames = $personMNames.filter(p => p.length > 0);
        
        
        const $person = new person($personFNames,$personMNames,$personLNames);
        
        $personArr.push($person);
        
    }
    
    return $personArr;
}