
select dp.dog_id, dp.dog_name, dp.dog_age, dp.breed, dp.heat_number, bi.breeding_id, bi.insemination_type, bi.ng_ml, bi.date_taken, bi.time_taken
from dog_profile dp 
left join breeding_info bi on dp.dog_id = bi.dog_id where user_id = $1;