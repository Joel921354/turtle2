INSERT INTO public.wedge (box_name, start_date, end_date, revocation, start_date_exists, end_date_exists)

select  
		md5(random()::text), 
		LOCALTIMESTAMP - interval '100 years' * random(), 
		LOCALTIMESTAMP - interval '100 years' * random(),
		LOCALTIMESTAMP - interval '100 years' * random(), 
		LOCALTIMESTAMP - interval '100 years' * random(),
		LOCALTIMESTAMP - interval '100 years' * random()

FROM generate_series(1,100) box_name;