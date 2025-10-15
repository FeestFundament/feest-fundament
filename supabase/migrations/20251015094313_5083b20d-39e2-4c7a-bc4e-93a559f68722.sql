-- Update the check_availability function to include stock for all products
CREATE OR REPLACE FUNCTION public.check_availability(
  p_product_id TEXT,
  p_start_date DATE,
  p_end_date DATE,
  p_quantity INTEGER
)
RETURNS TABLE (
  available BOOLEAN,
  max_available INTEGER
) 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  total_booked INTEGER;
  product_stock INTEGER;
BEGIN
  -- Get total stock for each product
  product_stock := CASE 
    WHEN p_product_id = '1' THEN 20  -- Statafel wit: 20 stuks
    WHEN p_product_id = '2' THEN 999  -- Biertafel set: onbeperkt
    WHEN p_product_id = '3' THEN 999  -- Mobiele bar: onbeperkt
    WHEN p_product_id = '4' THEN 999  -- Tafelrok: onbeperkt
    WHEN p_product_id = '5' THEN 999  -- Party tent: onbeperkt
    WHEN p_product_id = '6' THEN 999  -- LED verlichting: onbeperkt
    WHEN p_product_id = '7' THEN 999  -- Bar ombouw: onbeperkt
    WHEN p_product_id = '8' THEN 999  -- Bartafel: onbeperkt
    WHEN p_product_id = '9' THEN 999  -- Bartafel ombouw: onbeperkt
    WHEN p_product_id = '10' THEN 999 -- Fust: onbeperkt
    WHEN p_product_id = '11' THEN 999 -- Opbouw service: onbeperkt
    ELSE 999  -- Default high number for other products
  END;

  -- Calculate total booked quantity for overlapping dates
  SELECT COALESCE(SUM(quantity), 0) INTO total_booked
  FROM public.bookings
  WHERE product_id = p_product_id
    AND status != 'cancelled'
    AND (
      (start_date <= p_end_date AND end_date >= p_start_date)
    );

  -- Return availability status and max available quantity
  RETURN QUERY SELECT 
    (product_stock - total_booked) >= p_quantity as available,
    (product_stock - total_booked) as max_available;
END;
$$;