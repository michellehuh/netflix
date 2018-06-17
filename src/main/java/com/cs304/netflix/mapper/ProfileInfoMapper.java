package com.cs304.netflix.mapper;

import com.cs304.netflix.model.Profile;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface ProfileInfoMapper {

    @Select("SELECT * \n" +
            "  FROM Profile \n" +
            " WHERE adminId = #{adminId}\n" +
            "   and id = #{id}")
    Profile getProfileByAdminIdAndId(Profile profile);

    @Select("SELECT * \n" +
            "  FROM Profile \n" +
            " WHERE adminId = #{adminId}\n" +
            "   and name = #{name}")
    Profile getProfileByAdminIdAndName(Profile profile);

    @Update("UPDATE Profile \n" +
            "   SET age = #{age} \n" +
            " WHERE adminId = #{adminId} \n" +
            "   AND id = #{id}")
    Profile updateAge(Profile profile);

    @Insert("INSERT INTO Profile ( id, name, adminId, age )\n" +
            "VALUES ((((SELECT max(id) \n" +
            "             FROM Profile \n" +
            "             WHERE adminId = #{adminId}) || 0) + 1)\n" +
            "         , #{name}\n" +
            "         , #{adminId}\n" +
            "         , #{age})")
    boolean createProfile(Profile profile);
}