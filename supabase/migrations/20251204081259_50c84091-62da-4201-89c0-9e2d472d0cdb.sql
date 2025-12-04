-- Add user_id column to link bookings to authenticated users
ALTER TABLE public.bookings ADD COLUMN IF NOT EXISTS user_id uuid REFERENCES auth.users(id);

-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Anyone can create bookings" ON public.bookings;
DROP POLICY IF EXISTS "Anyone can view bookings" ON public.bookings;

-- Create secure RLS policies

-- Users can only view their own bookings
CREATE POLICY "Users can view own bookings"
ON public.bookings
FOR SELECT
USING (auth.uid() = user_id);

-- Admins can view all bookings
CREATE POLICY "Admins can view all bookings"
ON public.bookings
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Authenticated users can create bookings (linked to their account)
CREATE POLICY "Authenticated users can create bookings"
ON public.bookings
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Users can update their own bookings
CREATE POLICY "Users can update own bookings"
ON public.bookings
FOR UPDATE
USING (auth.uid() = user_id);

-- Admins can update all bookings
CREATE POLICY "Admins can update all bookings"
ON public.bookings
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));