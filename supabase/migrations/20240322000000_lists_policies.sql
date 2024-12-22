-- Enable RLS
alter table "public"."lists" enable row level security;

-- Create policies
create policy "Enable all access for authenticated users"
on "public"."lists"
as permissive
for all
to authenticated
using (true)
with check (true);

-- If you want to allow public read access but restrict writes to authenticated users:
create policy "Enable read access for all users"
on "public"."lists"
as permissive
for select
to public
using (true);