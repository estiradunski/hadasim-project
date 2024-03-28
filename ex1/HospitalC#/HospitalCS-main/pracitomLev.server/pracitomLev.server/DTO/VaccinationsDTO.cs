namespace pracitomLev.API.DTO
{
    public class VaccinationsDTO
    {
        public int Id { get; set; }
        public int patientId { get; set; }
        //public string TzPerson { get; set; }
        public DateTime DateOfVaccination { get; set; }
        public int ManufacturerId { get; set; }
    }
}
