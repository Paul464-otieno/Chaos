using System;
using System.ComponentModel.DataAnnotations;

namespace ChaosEmeraldsOfIncome.Models
{
    public class RentalIncome
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Property { get; set; }
        public double Mortgage { get; set; }
        public double Rent { get; set; }
        public string Frequency { get; set; }
        public bool IsActive { get; set; }
        public DateTime? LastUpdated { get; set; }
    }
}